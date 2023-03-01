// lets round  a couple of numbers
//round 99.9 to 100
console.log(Math.ceil(99.9))
// amazing know lets round it down 
console.log(Math.floor(99.9))
// omg youre amazing at this now lets display a random number to the console that ranges from 0 - 100
console.log(Math.random(100))
// not what is was looking
// reduce function using the acculator
let nathan = [1,2,3,4,5]
let louissaint = nathan.reduce((accumlator,currentValue)=>{
  return  currentValue + accumlator
},0)
console.log(louissaint)