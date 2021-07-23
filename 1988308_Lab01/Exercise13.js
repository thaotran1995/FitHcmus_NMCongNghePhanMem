function sum13(x,n)
{
    let T = 0;
    for(let i = 1; i <= n; i++)
    {
        T += x**(i*2);

    }
    return T;
}
// In kết quả với giá trị x và n do người dùng nhập 
console.log("T(x,n) =  ", sum13(2,3));
