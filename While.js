//q1

let count=0;
while(count<11){
    console.log(count);
    count++; //count = count+1
}

//q2

let even = 2
do{
    console.log(even)
    even+=2
}while(even<=100)
//q3
let userInput = Number(prompt("Enter a Number you Want To Square"));
let userInputSquare = Number(prompt("Enter the Number you Want to Square By"));
let result = userInput**userInputSquare
do{
    userInput++
}while(userInput<=result);

console.log(userInput-1);

//q4
let numberofStars = Number(prompt("Enter the Number of Rows you Want"))
let cont = 1
let stars ="*"
do{
    console.log(stars);
    stars = stars + "*"
    cont++
}while(cont<=numberofStars)


let n = Number(prompt("Enter a Number")) 
    let r = 0;
  
    while (n > 0) {
      n = Math.floor(n/10);
      r++;
    }
  
    console.log(r+ " Is the amount of digits in your number");


    let Num = Number(prompt("Enter another number"))
            let theResult = 0

            while(Num) {
                theResult += Num % 10;
                Num = Math.floor(Num / 10)
            }

            console.log(theResult + " is the sum of your digits")
  