function sum07(n)
{
    let s = 0.0;
    if(n < 1)
    {
        console.log("Vui long nhap so nguyen >= 1 ");
        return undefined;
    }
    else{
        for(let i = 1; i <= n; i++)
        {
            s += i/(i+1);

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum07(3));