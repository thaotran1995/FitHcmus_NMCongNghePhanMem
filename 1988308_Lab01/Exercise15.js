function sum15(n)
{
    let S = 0.0;
    let T = 0;
    for(let i = 1; i <= n; i++)
    {
        T+= i;
        S+= 1.0/T;

    }
    return S;
}

// In kết quả với giá trị n do người dùng nhập 
console.log("Tổng S(n): ", sum15(4));