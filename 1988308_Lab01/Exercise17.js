function factorial17(n)
{
    let S = 1;
    for(let i = 1; i <= n; i++)
    {
        S *= i;

    }
    return S;
}

// In kết quả với giá trị n do người dùng nhập 
console.log("S(n): ", factorial17(4));