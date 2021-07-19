let s = 0.0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n <= 5)
{
    console.log("Vui long nhap so nguyen > 5 ");
}
else{
    for(let i = 0; i <= n; i++)
    {
        s += (2*i+1)/(2*i+2);

    }
    console.log("Tong S = ", s);
}