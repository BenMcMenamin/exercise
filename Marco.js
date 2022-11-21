
//Q1
var myArray = [1, 98, -4, 475, 830, -74, -23, 80, 7,245, -2];
//Q2
document.write(myArray)
//Q3
for(let i=0; i<myArray.length; i++){
    if(myArray[i]<0){
        document.write("<br>")
        document.write(myArray[i]+" is a negative number in the array")
        document.write("<br>")
    }
}
//Q4
function sum(myArray) { 
    let sum = 0;

    
    for (let i = 0; i < myArray.length; i++) 
        sum += myArray[i]; 
   return sum;
} 
 document.write("<br>")
document.write("Sum of given array is " + sum(myArray));
 //Q5
 document.write("<br>")
 document.write("The Smallest Number in the Array is " + Math.min(...myArray))
 document.write("<br>")
 document.write("The Largest Number in the Array is " + Math.max(...myArray))
 //Q6
 document.write("<br>")
 var biggest = myArray[0];
var nextbiggest = myArray[0];
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]>biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
            nextbiggest = myArray[i];
    }
    
document.write("The Second Largest Number in the Array is " + nextbiggest);