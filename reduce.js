// how to get the sum of all the numbers in an array
const numbers = [1,2,3,4]
let num = 0 
for(let n of numbers)
    num+=n
    console.log(num)

// reduce method 
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},0)
console.log(sum)
//practice 
let dum = [2,3,4,5,6,]
const mum = dum.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},0)
console.log(mum)

let people =[20,20,20]
let person = people.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},0)
console.log(person)

// lets reverse a array instead of a string 
let nate = [1,2,3,4]
nate.reverse()
console.log(nate)

// another reduce method for muscle memory 
let water = [50,50]
let ocean = water.reduce((accumulator,currentValue)=>{
return accumulator + currentValue
},0)
console.log(ocean)

// one more 
let soda =[2,34,56,6]
let ice = soda.reduce((accumulator,currentValue)=>{
return accumulator + currentValue
},0)
console.log(ice)
 // random do the fizz buzz question 
function fizzBuzz(){
    for(i=1; i < 50; i++){
if(i % 2)
console.log("works")
else if (i % 4 )
console.log("also by 4")
else if (i % 10)
console.log("works by 10 too ")
else 
console.log("none of the other numbers matter")
    }

}
fizzBuzz()

let jesus = [2,2,2,2,2,2,2,2,2,2]
let God = jesus.reduce((accumulator,currentValue)=>{
return accumulator + currentValue
},0)
console.log(God)

//revese a string
let person1 = "nathan" 
.split("")
.reverse("")
.join("")
console.log(person1)


//lets create an object a retrieve some data from it 
const nathan = {
    age:20,
    Gender:"Male",
    Job:"software engineer"
}
console.log(nathan.Gender)