let T = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
let x = parseInt(prompt("nhap gia tri so nguyen X: " ));
T += x;
for(let i = 1; i <= n; i++)
{
    T += x**(i*2 +1);

}
console.log(" Gia tri T(x,n) = ", T);
