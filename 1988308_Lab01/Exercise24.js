    const prompt = require('prompt-sync')();
// Nhập mảng sổ nguyên n phần tử
    let n = parseInt(prompt("nhap gia tri so nguyen N: " ));
    let arr = [];
    for(let i = 0; i < n; i++)
    {
        arr[i] = parseInt(prompt("Nhập phần tử arr[" +i+"]: "));
    }
// Sắp xếp mảng tăng dần
    let arr_sort = arr.sort(function(a, b){return a - b});
    console.log(arr_sort);
// Nhập giá trị cần tìm
    let k = parseInt(prompt("nhập giá trị cần tìm k: " ));
    let find = false;
    for(let i = 0; i< arr_sort.length;i++)
    {
        if(arr_sort[i] == k)
        {
            find = true;
            console.log("giá trị k cần tìm nằm ở vị trí index : ", i);
            break;
        }
    }
    if(find == false)
    {
        arr_sort[arr_sort.length] = k;
        arr_sort.sort(function(a, b){return a - b});
        console.log(arr_sort);
    }