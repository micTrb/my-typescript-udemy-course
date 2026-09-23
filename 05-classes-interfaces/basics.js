"use strict";
// class User {
//   //Vanilla JS way
//   //   constructor() {
//   //     this.name = "Max";
//   //   }
Object.defineProperty(exports, "__esModule", { value: true });
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class User {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const mic = new User("Mic", 36);
const max = new User("Max", 38);
console.log(mic, max);
