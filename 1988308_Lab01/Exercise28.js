function task28(n)
{
    if (n == 1) {
        return 1;
    }
    let arr = new Array(n+1);
    let result = 0;
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    result = arr[n];
    return result;
}
// Chạy thử với n = 6
console.log(task28(6));