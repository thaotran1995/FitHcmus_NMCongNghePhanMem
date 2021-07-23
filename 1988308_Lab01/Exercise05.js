function sum05(n)
{
    let s = 0.0;
    if(n < 2 )
    {
        console.log("Vui long nhap so nguyen >= 2");
        return undefined;
    }
    else{
        for(let i = 0; i <= n; i++)
        {
            s += 1.0/(2*i + 1);

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum05(3));


