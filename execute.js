console.log("Test is being started!!!");
var aNum, bNum;
var readlineSync = require('readline-sync');

aNum = readlineSync.question(`Number A: `);

bNum = readlineSync.question(`Number B: `);

var dec_to_bho = (n) => {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }
    return parseInt(n, 10).toString(2);
}

var countInt = (num) => {
    let aNum = num.split("");
    return aNum.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

var fnExecution = (aNum, bNum) => {
    console.log(`It is starting the process!! ${aNum} and ${bNum} `);
    let mulNum = aNum * bNum;
    console.log(`MultiMumber = ${mulNum}`);
    let binaryString = dec_to_bho(mulNum);
    console.log(`The number of 1 in the result: ${countInt(binaryString)}`)
}

fnExecution(aNum, bNum);
console.log("Test finished!!!");