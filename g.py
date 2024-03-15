import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import matplotlib.pyplot as plt 
import numpy as np
import pandas as pd
cred = credentials.Certificate("C:/Users/18BMcMenamin.ACC/Downloads/lcss-test-firebase-adminsdk-1uvjx-895b61b110.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://lcss-test-default-rtdb.europe-west1.firebasedatabase.app/'})
user = input('Enter your name: ')
ref = db.reference('/')
ref = db.reference().child('Data').child(user)
results = ref.get()
print (results)
counter=1
xlist = []
ylist = []
for time, score in results.items(): 
    xlist.append (counter)
    ylist.append(int(score['score']))
    counter = counter+1
    print(score['score'])
averageScore = 0
for value in ylist:
    averageScore = averageScore+value
averageScore = averageScore/len(ylist)
print(round(averageScore, 1))
print('-------scores per game-------')
print(ylist)
print('--------------')
c=[]
#average score line
plt.axhline(y=averageScore,linewidth=1, color='k')
for value in ylist:
    if value> averageScore:
        c.append('Red')
    if value < averageScore:
        c.append('Blue')
    if value == averageScore:
        c.append('Purple')
'''
for each game
find the average score for 2games, 3games, 4games and show it is increasing/decreasing over time
Our model predicts that the users memeory is improving and this will continue with continued use of the model
'''
plt.bar(xlist, ylist, color = c)
plt.title("Memory Game")
plt.xlabel("Times Played")
plt.ylabel("Score")
plt.show()

M=3
result = []
for i in range(len(ylist) - M + 1):
    MAverage = ylist[i : i + M]
    MA = sum(MAverage) / M
    result.append(MA)
x_scale = []
for i in range(len(result)):
    x_scale.append(i)
    
print('-------moving average-------')
print((result))
print('--------------') 
plt.plot(x_scale, result)
plt.title("Memory Game")
plt.xlabel("Times Played")
plt.ylabel("Score")
plt.show()

if result[-1] > result[-2]:
    print ("Your memory is improving")
if result[-1] < result[-2]:
    print ("Your memory is decreasing. Perchance you are tired and need to take a break")
if result [-1] == result [-2]:
    print ("Your memory remains the same. Keep playing to help improve your memory")
    
