"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHello_2 = exports.testHello = void 0;
function testHello(name, userid) {
    const id = (userid === undefined ? "000" : userid);
    console.log(id); // Output the user ID (if provided), otherwise output "000"
    const id2 = userid || "000";
    console.log(id2); // Output the user ID (if provided), otherwise output "000"
    return `test hello ${name}`; // Return a greeting message with the provided name
}
exports.testHello = testHello;
console.log(testHello('Paul', 'www')); // Call the testHello function with name "Paul" and user ID "www" and log the result
const testHello_2 = (name, userid) => {
    const id = (userid === undefined ? "000" : userid);
    console.log(id); // ユーザーIDが指定されていれば出力し、そうでなければ "000" を出力
    const id2 = userid || "000";
    console.log(id2); // ユーザーIDが指定されていれば出力し、そうでなければ "000" を出力
    return `test hello_2 ${name}`; // 提供された名前を含む挨拶メッセージを返す
};
exports.testHello_2 = testHello_2;
console.log((0, exports.testHello_2)('Paul', 'www')); // 名前を "Paul"、ユーザーIDを "www" でtestHello関数を呼び出し、結果をログに出力
