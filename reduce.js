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