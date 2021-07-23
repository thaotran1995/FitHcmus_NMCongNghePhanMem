function sum18(x,n)
{
    let S = 0.0;
    let T = 1;
    for(let i = 1; i <= n; i++)
    {
        T*= i;
        S+= x*i/T;

    }
    return S;
}

// In kết quả với giá trị x và n do người dùng nhập 
console.log("S(x,n) =  ", sum18(2,3));