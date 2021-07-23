
function sum01(n)
{
    let s = 0;
    if(n <= 3 || n >=50)
    {
        console.log("Vui lòng nhập số nguyên > 3 va < 50");
        return undefined;
    }
    else{
        for(let i = 0; i <= n; i++)
        {
            s = s + i;

        }
        return s;
    }
}
// 
console.log("Tổng S(n): ", sum01(6));

