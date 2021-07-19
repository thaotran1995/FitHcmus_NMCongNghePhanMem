let s = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n < 7 )
{
    console.log("Vui long nhap so nguyen >= 7");
}
else{
    for(let i = 1; i <= n; i++)
    {
        s = s + parseFloat(1/i);

    }
    console.log("Tong S = ", s);
}