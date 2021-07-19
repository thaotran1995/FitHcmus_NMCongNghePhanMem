let S = 0.0;
let T = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
for(let i = 1; i <= n; i++)
{
    T+= i;
    S+= 1.0/T;

}
console.log(" Gia tri S(n) = ", S);
