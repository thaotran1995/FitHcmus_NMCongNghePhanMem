// Hàm Tìm ra chuỗi dài nhất trong mảng
function isUniqueString(str){

    let  arr_char = str.split('');
    arr_char.sort();
    for(let i = 1; i < arr_char.length; ++i)
    {
        if(arr_char[i] == arr_char[i-1])
        return false
    }
    return true;
}
// Gọi hàm
console.log(isUniqueString("anchdgv"));