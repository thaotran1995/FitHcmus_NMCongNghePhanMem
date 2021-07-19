const prompt = require('prompt-sync')();
// Nhập mảng sổ nguyên n phần tử
let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
let arr = [];
for(let i = 0; i < n; i++)
{
    arr[i] = parseInt(prompt("Nhập phần tử arr[" +i+"]: "));
}
console.log(arr);
// tìm và in ra mảng con có sum lớn nhất
let maxsum_final = Number.MIN_SAFE_INTEGER;
let maxsum_now = 0;
let start_index = 0;
let end_index = 0;
let t = 0;
for(let i = 0; i < arr.length; i++)
{
    maxsum_now += arr[i];
    if(maxsum_final < maxsum_now)
    {
        maxsum_final =  maxsum_now;
        start_index = t;
        end_index  = i;
    }
    if(maxsum_now < 0 )
    {
        maxsum_now = 0;
        t = i +1;
    }
}
let arr_child = arr.slice(start_index, end_index +1);
console.log("Mảng con cần tìm là: ");
console.log(arr_child);
console.log("Giá trị Sum max là : ", maxsum_final);