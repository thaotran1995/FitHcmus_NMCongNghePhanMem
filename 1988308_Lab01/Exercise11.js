let S = 0;
let t = 1;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
for(let i = 1; i <= n; i++)
{
    t*= i;
    S+= t;

}
console.log(" Gia tri S(n) = ", S);
