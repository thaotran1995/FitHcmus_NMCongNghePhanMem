// tìm và in ra mảng con có sum nhỏ nhất
function minSumChildArr(arr)
{
    let minsum_final = Number.MAX_SAFE_INTEGER;
    let minsum_now = 0;
    let start_index = 0;
    let end_index = 0;
    let t = 0;
    for(let i = 0; i < arr.length; i++)
    {
        minsum_now += arr[i];
        if(minsum_final >  minsum_now)
        {
            minsum_final =  minsum_now;
            start_index = t;
            end_index  = i;
        }
        if(minsum_now > 0 )
        {
            minsum_now = 0;
            t = i +1;
        }
    }
    let arr_child = arr.slice(start_index, end_index +1);
    console.log("Mảng con cần tìm là: ");
    console.log(arr_child);
    console.log("Giá trị Sum min là : ", minsum_final);
}

// Chạy thử kết quả với mảng [-2, 1, -3, 4, -1, 2, 1, -2, 4]
minSumChildArr([-2, 1, -3, 4, -1, 2, 1, -2, 4]);