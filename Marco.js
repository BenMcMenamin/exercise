
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
//Q7
document.write("<br>")
let even_count= 0;
let odd_count = 0;


for(let o = 0; o < myArray.length; o++) {
    if(myArray[o] % 2==0){
    even_count++;
     } else{
    odd_count++;}
}
document.write("The Number of Even Elements in the Array is "+ even_count
+ "<br>" + "The Number of Odd Elements in the Array is "+ odd_count)

//Q8
document.write("<br>")
document.write("<br>")
let array1 = [-12, 4, 18, 23, 4000000, 80, 65];
document.write(array1)
document.write("<br>")
let newArray = myArray.concat(array1);
document.write("Both of the Existing Arrays combined are "+ newArray);

//Q9
document.write("<br>")
newArray.push(89)
document.write("The New Array but with an Added 89 "+ newArray)

//Q10
document.write("<br>")
var popped = newArray.pop(); 
        document.write("Removed element: " + popped + "<br>"); 
        document.write("Remaining elements: " + newArray); 