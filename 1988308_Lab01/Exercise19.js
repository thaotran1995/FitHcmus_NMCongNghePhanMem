let S = 1.0;
let T = 1;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
let x = parseInt(prompt("nhap gia tri so nguyen X: " ));
for(let i = 1; i <= n; i++)
{
    T *= i*2*(i*2-1);
    S+= (x*i*2)/T;

}
console.log(" Gia tri S(x,n) = ", S);
