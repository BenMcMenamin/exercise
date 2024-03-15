import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("C:/Users/18BMcMenamin.ACC/Downloads/lcss-test-firebase-adminsdk-1uvjx-895b61b110.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://lcss-test-default-rtdb.europe-west1.firebasedatabase.app/'})
user = input('Enter your name: ')
ref = db.reference('/')
ref = db.reference().child('Data').child(user)
ser = serial.Serial()
ser.baudrate = 115200
ser.port = 'COM9'
runningtotal = 0
ser.open()
while True:
    data = ser.readline().decode('utf-8').strip()
    print(data)
    if data:
        if data !='F':
            runningtotal = runningtotal + int (data)
        else:
            ref.update ({str(int(time.time())):{'score': runningtotal}})