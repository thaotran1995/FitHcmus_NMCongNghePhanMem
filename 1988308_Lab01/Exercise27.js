// Tìm phần tử chỉ xuất hiện một lần
    
    function duplicate_delete(arr) {
        let arr_sort = arr.sort();
        var newArr = [arr_sort[0]];
        for (let i = 1; i < arr_sort.length; i++)
        {
          if (arr_sort[i] !== arr_sort[i - 1])
          {
            newArr.push(arr_sort[i]);
          }
        }
        return newArr
      }

    console.log(duplicate_delete([10,20,30,10,20,40,50,70,70]));
