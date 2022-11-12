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

//   const footBall = [{name: 'marko standkovic', club: 'intermiland'},
//                     {name: 'marko simic', club: 'persija'},
//                     {name: 'vidic', club: 'menchester united'},
//                     {name: 'pjanic', club: 'barcelona'}];
// const totalFootBall = footBall.map((element)=>{
//     return `${element.name}, ${element.club} `
// })

// console.log(totalFootBall)

// const result = totalFootBall.pop()
// console.log(result)
// console.log(totalFootBall)


//sort land 
// function robotFactory(model, mobile){
//   return {
//     model: model,
//     mobile: mobile,
//     beep() {
//       console.log('Beep Boop');
//     }
//   }
// }

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)
// console.log(newRobot.model)
// console.log(newRobot.mobile)

// function robotFactory(model, mobile){
//   return { 
//     model,
//     mobile,
//      beep(){
//       console.log('Beep Boop');
//     }
//   }
// }

// distruction
// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log('Beep Boop');
//     },
//     fireLaser() {
//       console.log('Pew Pew');
//     },
//   }
// };

// const {functionality} = robot
// functionality.beep();
// functionality. fireLaser()



//assign dll 
// const robot = {
// 	model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot)


// console.log(robotEntries);

// // Declare newRobot below this line:

// const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)
 

// console.log(newRobot);

////oop object orientied progrwming 
// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
  
//     get name() {
//       return this._name;
//     }
//     get behavior() {
//       return this._behavior;
//     }   
  
//     incrementBehavior() {
//       this._behavior ++;
//     }
//   }
//   const halley = new Dog('Halley');
//   console.log(halley.name); // Print name value to console
//   console.log(halley.behavior); // Print behavior value to console
//   halley.incrementBehavior(); // Add one to behavior
//   console.log(halley.name); // Print name value to console
//   console.log(halley.behavior); // Print behavior value to console