function formatNumber(num) {
    console.log(num.toFixed(6))
  }
  
  formatNumber(6);
  

function nathan(num){
console.log(num.toFixed(5))
}
nathan(5)

// adding all the numbers in an array 

let num = [1,2,3,4,5]
// The output should be 15
let sum = num.reduce((accumlator,currentValue)=>{
  return accumlator + currentValue
}
,0)
console.log(sum)
// lets go we did it 
// now do the same thing but multiply all the numbers in the array by 2
let newNum = [1,2,3,4,5]
let Newsum = newNum.map(double)
function double(value){
return value * 2
}
console.log(Newsum)
// lets go we did it again