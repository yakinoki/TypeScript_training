export function testHello(name: string, userid?: string):string {
    const id = (userid === undefined?"000":userid);
    console.log(id);
    const id2 = userid || "000";
    console.log(id2);
    return `test hello ${name}`
}
console.log(testHello('Paul', 'www'))



