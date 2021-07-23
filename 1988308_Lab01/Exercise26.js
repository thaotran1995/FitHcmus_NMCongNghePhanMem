
// Tìm phần tử chỉ xuất hiện một lần
    function find_Uni_Array(arr)
    {
        let result = [];
        for(let i = 0; i < arr.length; i++){
            let count = 0;
            for(let j = 0; j < arr.length; j++)
            {
                if(arr[i]== arr[j]&&i!=j)
                {
                    count = 1;
                }
            }
            if(count == 0)
            {
                result.push(arr[i]);
            }
        }
        return result;
    }
    
    console.log(find_Uni_Array([10, 20, 30, 20, 50, 10, 40]));
    