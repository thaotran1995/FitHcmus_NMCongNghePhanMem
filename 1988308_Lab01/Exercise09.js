let s = 1;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n <= 6)
{
    console.log("Vui long nhap so nguyen > 6");
}
else{
    for(let i = 1; i <= n; i++)
    {
        s *= i;

    }
    console.log("Tong S = ", s);
}