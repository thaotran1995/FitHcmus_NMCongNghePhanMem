// const prompt = require('prompt-sync')();
// // Nhập mảng sổ nguyên n phần tử
//     let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
//     let arr = [];
//     for(let i = 0; i < n; i++)
//     {
//         arr[i] = parseInt(prompt("Nhập phần tử arr[" +i+"]: "));
//     }
// // Xuất mảng vừa nhập
//     console.log(arr);

//  tìm phần tử có giá trị giữa nhất trong một mảng chưa được sắp xếp.
function task25(arr)
{
    arr.sort(function(a, b){return a - b});
    let mid = 0;
    let result = 0;
    if((arr.length % 2) == 0)
    {
        mid = arr.length/2;
        result = arr[mid -1];
    }
    else
    {
        result = arr[Math.floor( arr.length/2)];
    }
    return result;
}
// chạy thử với mảng [10, 2, 38, 23, 38, 23, 21]
console.log(task25([10, 2, 38, 23, 38, 23, 21]));
    