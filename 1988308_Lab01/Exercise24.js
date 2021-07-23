function task24(arr, k)
{
    // Sắp xếp mảng tăng dần
    let arr_sort = arr.sort(function(a, b){return a - b});
    // tìm giá trị k trong mảng đã sắp xếp
    let find = false;
    for(let i = 0; i< arr_sort.length;i++)
    {
        // Nếu tìm thấy in ra màn hình vị trí của k
        if(arr_sort[i] == k)
        {
            find = true;
            console.log("giá trị  cần tìm nằm ở vị trí index : ", i);
            break;
        }
    }
    if(find == false) // Nếu không tìm thấy thì chèn k vào đúng vị trí trong mảng
    {
        arr_sort[arr_sort.length] = k;
        arr_sort.sort(function(a, b){return a - b});
        console.log(arr_sort);
    }
    
}

// chạy thử 
task24([1, 2, 4, 5, 6],5); // tìm vị trí của 5 trong mảng [1, 2, 4, 5, 6]
task24([1, 2, 4, 5, 6],7); // tìm vị trí của 7 trong mảng [1, 2, 4, 5, 6]
task24([1, 2, 4, 5, 6],3); // tìm vị trí của 3 trong mảng [1, 2, 4, 5, 6]