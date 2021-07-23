function sum08(n)
{
    let s = 0.0;
    if(n <= 5)
    {
        console.log("Vui long nhap so nguyen > 5 ");
        return undefined;
    }
    else{
        for(let i = 0; i <= n; i++)
        {
            s += (2*i+1)/(2*i+2);

        }
        return s;
    }
}
// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum08(6));