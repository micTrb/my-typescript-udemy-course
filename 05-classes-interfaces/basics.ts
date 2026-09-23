// class User {
//   //Vanilla JS way
//   //   constructor() {
//   //     this.name = "Max";
//   //   }

//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const mic = new User("Mic", 36);
const max = new User("Max", 38);

console.log(mic, max);
