// fungsi filter 


// const names = [ 'Sandy', 'Dwi', 'Akmal', 'Arif', 'Zaki', 'tia', 'Hanif','Sam'];

// const filterNames = ( char, array) => {
//       return array.filter((name) => name[0].toLowerCase() === char);
// };
// console.log(filterNames('S', names));

// const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter'];

// const filteredNames = (char, array) => {
//   return array.filter((name) => name[0].toLowerCase() === char);
// };

// console.log(filteredNames('j', names));

// const number = ['yandi', 'faris' , 'akmal' , 'novita' ,'sehan' ];
 
// const resultNumber = number.filter((element)=> element !='sehan' && element !='yandi' );

// console.log(resultNumber)

// const fullName = ['arditamami', 'alfansyahputra', 'astmakapa', 'noah syahputra'];

// const resultName = fullName.filter((element, index)=>{
//     return element.length > 10 
// })
 
// console.log(resultName)

// const fullName = ['arditamami', 'Klfansyahputra', 'astmakapa', 'noah syahputra'];

//  const resultName = fullName.filter((element, index)=>{
//        return element != 'K'
//      })
     
//     console.log(resultName)


const playerFootball = [{
    name : 'van persie',
    club : 'arsenal',
    age  :'25'
},{
    name : 'jarot bowen',
    club : 'aston vila ',
    age  :'24'
},{
    name : 'samir nasri',
    club : 'man city',
    age  :'24'
},{
    name : 'yandi',
    club : 'arsenal',
    age  :'24'
},{
    name : 'hulk',
    club : 'porto',
    age  :'24'
},{
    name : 'ondegard',
    club : 'arsenal',
    age  :'24'
},];
    
const result = playerFootball.filter((player)=> player.club ==='arsenal');
 
console.log(result)


const numberStudent = [
    {name : 'aryan', kelas : 7 , nilai : 60 },
    {name : 'aryin', kelas : 8 , nilai : 55 },
    {name : 'eryan', kelas : 7 , nilai : 60 },
    {name : 'aryun', kelas : 6 , nilai : 90 },
    {name : 'iryan', kelas : 7 , nilai : 60 },
    {name : 'oryan', kelas : 6 , nilai : 70 },
    {name : 'aryon', kelas : 7 , nilai : 40 },
    {name : 'karyan', kelas : 8 , nilai : 50 },

]

const resultStudent = numberStudent.filter((score)=>score.nilai < 70)
 console.log(resultStudent)