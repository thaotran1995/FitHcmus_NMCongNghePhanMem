function sum02(n)
{
    let s = 0;
    if(n < 5 || n > 20 )
    {
        console.log("Vui lòng nhập n  >= 5 va <= 20");
        return undefined;
    }
    else{
        for(let i = 0; i <= n; i++)
        {
            s = s + i*i;

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum02(4)); // vd: n = 5


