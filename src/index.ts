import { Hello, MSGtest, fetchData } from './functions';
import { testHello, testHello_2 } from '../Functions/TEST';

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
console.log(testHello_2('Paul')); // Output: Hello from test, Paul

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


// 非同期関数を呼び出し、結果を処理する
async function main() {
  try {
    console.log("データを取得中...");
    const result = await fetchData(); // fetchData関数をawaitで呼び出し
    console.log(result); // 結果を表示
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

// main関数を実行
main();
