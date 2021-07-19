let s = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen N: " ));
if(n < 5 || n > 20 )
{
    console.log("Vui long nhap so nguyen >= 5 va <= 20");
}
else{
    for(let i = 0; i <= n; i++)
    {
        s = s + i*i;

    }
    console.log("Tong S = ", s);
}


