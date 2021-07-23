function sum19(x,n)
{
    let S = 1.0;
    let T = 1;
    for(let i = 1; i <= n; i++)
    {
        T *= (i*2)*(i*2-1);
        S+= (x*i*2)/T;

    }
    return S;
}

// In kết quả với giá trị x và n do người dùng nhập 
console.log("S(x,n) =  ", sum19(3,3));