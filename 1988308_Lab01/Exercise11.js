function sum11(n)
{
    let s = 0;
    let t = 1;
    for(let i = 1; i <= n; i++)
    {
        t*= i;
        s+= t;

    }
    return s;
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum11(4));
