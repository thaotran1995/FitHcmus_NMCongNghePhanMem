function maxSumChildArr(arr)
{
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
    console.log("Mảng con có Sum max là: ", arr_child);
    console.log("Giá trị Sum max là : ", maxsum_final);
}

// Chạy thử kết quả với mảng [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSumChildArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]);