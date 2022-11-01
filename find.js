// fungsi find 

// const number = ['cristiano', 'haland', 'sevcenko', 'bruno guimaraes'];

// const result = number.find((player)=> player !='haland')
// console.log(result)


// const student = ['ari', 'evan', 'ronggo', 'fajar']
// const resultStudent = student.join(' ');
// console.log(resultStudent)

//// lastindexOf
// const nilai = [70, 80, 90 , 50, 60, 50, 70, ];

// const nilaiResult = nilai.lastIndexOf(70)

// console.log(nilaiResult)

//// map 
// const number = [30, 40, 50 , 60, 90, 0, 50, 80, ];
//  const result = number.map((element)=>{
//     return element < 90
//  } )
//   console.log(result);

  const footBall = [{name: 'marko standkovic', club: 'intermiland'},
                    {name: 'marko simic', club: 'persija'},
                    {name: 'vidic', club: 'menchester united'},
                    {name: 'pjanic', club: 'barcelona'}];
const totalFootBall = footBall.map((element)=>{
    return `${element.name}, ${element.club} `
})

console.log(totalFootBall)

const result = totalFootBall.pop()
console.log(result)
console.log(totalFootBall)