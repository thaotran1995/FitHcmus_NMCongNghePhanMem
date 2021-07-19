let s = 0.0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n < 1)
{
    console.log("Vui long nhap so nguyen >= 1 ");
}
else{
    for(let i = 1; i <= n; i++)
    {
        s += i/(i+1);

    }
    console.log("Tong S = ", s);
}