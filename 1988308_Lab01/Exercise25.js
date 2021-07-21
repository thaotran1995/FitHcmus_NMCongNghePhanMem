const prompt = require('prompt-sync')();
// Nhập mảng sổ nguyên n phần tử
    let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
    let arr = [];
    for(let i = 0; i < n; i++)
    {
        arr[i] = parseInt(prompt("Nhập phần tử arr[" +i+"]: "));
    }
// Xuất mảng vừa nhập
    console.log(arr);
// Tìm giá trị giữa nhất
    let mid = 0;
    let median = 0;
    if((arr.length % 2) == 0)
    {
        mid = arr.length/2;
        median = (arr[mid]+arr[mid -1])/2;
    }
    else
    {
        median = arr[Math.floor( arr.length/2)];
    }
    console.log("Giá trị giữa nhất của mảng là: ", median);