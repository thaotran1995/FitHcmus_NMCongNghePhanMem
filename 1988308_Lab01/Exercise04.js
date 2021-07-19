let s = 0.0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
if(n <= 9 )
{
    console.log("Vui long nhap so nguyen > 9");
}
else{
    for(let i = 1; i <= n; i++)
    {
        s += 1.0/(2*i);

    }
    console.log("Tong S = ", s);
}