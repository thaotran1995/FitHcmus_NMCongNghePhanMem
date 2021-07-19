let S = 1.0;
let T = 1;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
let x = parseInt(prompt("nhap gia tri so nguyen X: " ));
S += x;
for(let i = 1; i <= n; i++)
{
    T *= (i*2+1)*i*2;
    S+= (x*(i*2+1))/T;

}
console.log(" Gia tri S(x,n) = ", S);
