"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.MSGtest = exports.Hello = void 0;
function Hello(name) {
    return `Hello ${name}`;
}
exports.Hello = Hello;
console.log(Hello('Paul'));
function MSGtest(msg) {
    const outputText = (str) => {
        console.log("waiting...");
        const returnPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Message: ${str}`);
                resolve();
            }, 1000);
        });
        return returnPromise;
        console.log("returnの前に書かないとダメ");
    };
    const func = async () => {
        console.log("count 1");
        await outputText(msg);
        console.log("count 2");
    };
    func();
}
exports.MSGtest = MSGtest;
// 遅延をシミュレートするための関数
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// 非同期関数の定義
async function fetchData() {
    await delay(2000); // 2秒の遅延をシミュレート
    return "データが取得されました！";
}
exports.fetchData = fetchData;
