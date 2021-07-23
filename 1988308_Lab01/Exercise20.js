function sum20(x,n)
{
    let S = 1.0;
    let T = 1;
    S += x;
    for(let i = 1; i <= n; i++)
    {
        T *= (i*2+1)*i*2;
        S+= (x*(i*2+1))/T;

    }
    return S;
}

// In kết quả với giá trị x và n do người dùng nhập 
console.log("S(x,n) =  ", sum20(3,3));