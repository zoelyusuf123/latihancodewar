//perulangan yang dibalik .... 
//for (let index = 3 ; index >=0 ; index-=1) {
//    console.log(index)
    
// }

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both arrays have the number: ' + yourArray[j]);
//     }
//   }
// }

const bobsFollowers = ['aca', 'loka', 'eder', 'name']

const tinasFollowers = ['Tina','loka', 'eder', ]
let mutualFollowers = [];

// for(i = 0 ; i < bobsFollowers.length; i++ ){
//   for(j = 0 ; j < tinasFollowers.length; j++){
//     if(bobsFollowers[i] === tinasFollowers[j] ){
//         mutualFollowers.push(tinasFollowers[j])
//     }
//   }
// }
// console.log(mutualFollowers)


// for(i = 0 ; i < bobsFollowers.length; i++ ){
//     for(j = 0 ; j < tinasFollowers.length; j++){
//       if(bobsFollowers[i] || tinasFollowers[j] ){
//           mutualFollowers.push(tinasFollowers[j])
//       }
//     }
//   }
//   console.log(mutualFollowers)
  
// while loop

// for (let counterOne = 1; counterOne < 4; counterOne++){
//   console.log(counterOne);
// }
 
// // A while loop that prints 1, 2, and 3
// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }
// for (let index = 0; index < 1000; index++) {
//   while (index % 2 === 0 ) {
//     console.log('genap'+'  '+index)
//     index++
//   }
  
// }

// for (let j = 0; j < 1000 ; j++) {
//   while(j % 2 === 1 && j != 0){
//    console.log(`ganjil ${j}`)
//    j++
// }
// }


for (let index = 0; index < 99 ; index++) {
 if(index >= 5){
 break;
 }
 console.log('makan yuk')
}
