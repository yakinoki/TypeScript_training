"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSGtest = exports.Hello = void 0;
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
