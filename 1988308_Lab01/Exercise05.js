let s = 0.0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n < 2 )
{
    console.log("Vui long nhap so nguyen >= 2");
}
else{
    for(let i = 0; i <= n; i++)
    {
        s += 1.0/(2*i + 1);

    }
    console.log("Tong S = ", s);
}