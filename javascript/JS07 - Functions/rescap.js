function getSquareNumber(number) {
    const result = number ** 2;
    return result;
}

function clearConsole() {
    console.clear();
    console.log("S-a golit consola")
}

a = getSquareNumber(4);
b = getSquareNumber(a);
c = getSquareNumber(6 + a * 2);

console.log("TEXT CARE SE STERGE");

clearConsole();

console.log("4^2=" + a);
console.log("a^2=" + b);
console.log("c=" + c);