export function Hello(name: string):string {
    return `Hello ${name}`
}
console.log(Hello('Paul'))


export function MSGtest(msg: string):void {
    const outputText = (str: string): Promise<any> => {
        console.log("waiting...");
        const returnPromise = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log(`Message: ${str}`);
            resolve();
        }, 1000);
        });
        return returnPromise;
    };
    
    const func = async () => {
    console.log("count 1");
    await outputText(msg);
    console.log("count 2");
    };

    func();
}