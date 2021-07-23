function sum04(n)
{
    let s = 0.0;
    if(n <= 9 )
    {
        console.log("Vui long nhap so nguyen > 9");
        return undefined;
    }
    else{
        for(let i = 1; i <= n; i++)
        {
            s += 1.0/(2*i);

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum04(10));