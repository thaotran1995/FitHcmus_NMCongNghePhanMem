function sum03(n)
{
    let s = 0;
    if(n < 7 )
    {
        console.log("Vui long nhap so nguyen >= 7");
        return undefined;
    }
    else{
        for(let i = 1; i <= n; i++)
        {
            s = s + parseFloat(1/i);

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum03(7));
