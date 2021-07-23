function power10(x,n)
{
    let T = 1;
    for(let i = 1; i <= n; i++)
    {
        T*= x;
    }
    return T;
}

// In kết quả với giá trị x và n do người dùng nhập 
console.log("T(x,n) =  ", power10(3,2));