

// function evenOrOdd(number) {
// let result =''
//    if(number % 2 === 0){
//     result+= 'event'
//    }
//    else if(number  % 2 != 0){
//      result += 'odd'
//    }
//    return result
//   }
 

// console.log(evenOrOdd(-5))

// function even_or_odd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
//  }


function basicOp(operation, value1, value2)
{
let tampung = Array.of(value1,value2,operation)
let number = operation.split(' ')
  // tampung = `${value1} , ${operation} , ${value2}`
  console.log(tampung)
  console.log(number)
  console.log(operation)
   
}

(basicOp('+',2,2))

// let numeric = '+';
// console.log(typeof(numeric))
// let hasil = numeric.toString(' ')
// console.log(typeof(hasil))