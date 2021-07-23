function sum09(n)
{
    let s = 1;
    if(n <= 6)
    {
        console.log("Vui long nhap so nguyen > 6");
        return undefined;
    }
    else{
        for(let i = 1; i <= n; i++)
        {
            s *= i;
        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum09(7));
