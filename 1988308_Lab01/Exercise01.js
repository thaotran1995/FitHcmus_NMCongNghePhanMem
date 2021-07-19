let s = 0;
const prompt = require('prompt-sync')();
let n = parseInt(prompt("nhap gia tri só nguyen n : " ));
if(n <= 3 || n >=50)
{
    console.log("Vui long nhap so nguyen > 3 va < 50");
}
else{
    for(let i = 0; i <= n; i++)
    {
        s = s + i;

    }
    console.log("Tong S = ", s);
}


