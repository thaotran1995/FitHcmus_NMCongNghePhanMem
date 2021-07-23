function sum14(x,n)
{
    let T = 0;
    for(let i = 0; i <= n; i++)
    {
        T += x**(i*2 +1);

    }
    return T;
}
// In kết quả với giá trị x và n do người dùng nhập 
console.log("T(x,n) =  ", sum14(2,3));

