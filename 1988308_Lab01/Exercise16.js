let S = 0.0;
let T = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
let x = parseInt(prompt("nhap gia tri so nguyen X: " ));
for(let i = 1; i <= n; i++)
{
    T+= i;
    S+= x*i/T;

}
console.log(" Gia tri S(x,n) = ", S);
