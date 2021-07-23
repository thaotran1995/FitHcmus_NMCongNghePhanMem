function sum06(n)
{
    let s = 0.0;
    if(n <= 6 )
    {
        console.log("Vui long nhap so nguyen > 6 ");
        return undefined;
    }
    else{
        for(let i = 1; i <= n; i++)
        {
            s += 1.0/(i*(i+1));

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum06(7));