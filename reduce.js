// const numberValue =[[80, 90, 70, 90, 80],[30,90,90,90]];
// const hasil = numberValue[0]
// console.log(hasil)
//  const total = 8000

// const result = hasil.reduce((acc, curr)=> acc- curr,total)
// console.log(result)

// //solution 

// const number = [[80,90,90,90,90],[90]];
// console.log(number[0][1])

// sort 

// const numberValue = [80,80,90,30,20,70,80,90,70];

// const result = numberValue.sort((a,b) =>{
//    return b-a
// })
// console.log(result)


// splice 

// const value = [90, 70, 90, 60, 80,];

// const result = value.splice(4,0,40,80)

// console.log(value)


// console.log(value.valueOf())

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
