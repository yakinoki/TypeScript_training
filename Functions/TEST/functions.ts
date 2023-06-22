export function testHello(name: string, userid?: string): string {
    const id = (userid === undefined ? "000" : userid);
    console.log(id);  // Output the user ID (if provided), otherwise output "000"
    const id2 = userid || "000";
    console.log(id2);  // Output the user ID (if provided), otherwise output "000"
    return `test hello ${name}`;  // Return a greeting message with the provided name
}
console.log(testHello('Paul', 'www'));  // Call the testHello function with name "Paul" and user ID "www" and log the result




