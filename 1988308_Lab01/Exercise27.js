// Xóa phần tử trùng
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
// Chạy thử với mảng [10,20,30,10,20,40,50,70,70]
console.log(duplicate_delete([10,20,30,10,20,40,50,70,70]));
