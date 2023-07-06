import { Hello, MSGtest } from './functions';
import { testHello } from '../Functions/TEST';

const t = true;

console.log(t); // Output: true
console.log(t && t); // Output: true
console.error('error_test', t); // Output: error_test true

const user = {
  name: 'John',
  age: 30,
  isTeen() {
    return this.age >= 13 && this.age <= 19;
  },
};

user.name = 'Adam';
console.log(user.name); // Output: Adam
console.log(user.isTeen()); // Output: false
user.age = 15;
console.log(user.isTeen()); // Output: true

console.log(Hello('Paul')); // Output: Hello, Paul
console.log(testHello('Paul')); // Output: Hello from test, Paul

type SupportVersions = {
  [env: number]: boolean;
};

let versions: SupportVersions = {
  102: true,
  200: false,
};

let result = '';
while (result.length < 20) {
  result += 'Hello';
}

console.log(result); // Output: HelloHelloHelloHelloHello

enum Suit {
  Spade,
  Heart,
  Club,
  Diamond,
}

console.log(Suit[0]); // Output: Spade

console.log(MSGtest('ok!')); // Output: Message: ok!
