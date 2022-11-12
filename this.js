// const robot = {
//     model:'1E78V2',
//     energyLevel : 100,
//     provideInfo(){
//       return `I am ${this.model} and my current energy level is ${this.energyLevel}`
//     }
//   };
//   console.log(robot.provideInfo())
const robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot.recharge()
  