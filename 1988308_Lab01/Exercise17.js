let S = 1;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));

for(let i = 1; i <= n; i++)
{
    S *= i;

}
console.log("Tong S(n) = ", S);
