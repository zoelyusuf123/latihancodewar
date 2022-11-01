// 1 (Reverse string) (1 point)
// input: "Saya Suka Javascript"
// output: "Javascript Suka Saya"

// 2 (Word with length is less than 5) (4 point) (filter)
// input: "Saya Suka Javascript"
// output: ["Saya", "Suka"]

// 3 (Categorize string with length is 3) (3 point)
// input: "Saya Suka Javascript"
// output: ["Say", "a S", "uka", " Ja", "vas", "cri", "pt"]

const nama = "saya suka javascript"



const arrNames = [];
let strTemp = '';

for (let i = 0; i <= nama.length; i++) {
  if (nama[i] === ' ' || i === nama.length) {
    arrNames.push(strTemp);
    strTemp = ''; 
  } else {
    strTemp += nama[i];
   }
 }
 
 let result = arrNames.reverse()
 let total = result.join(' ');
 console.log(total)


// 2 
let result2 = arrNames.reverse()
arrNames.pop()
console.log(result2)



//3

let result3 = arrNames.filter(a => 
     a < 3
)

console.log(result3)
