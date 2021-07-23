// Hàm kiểm tra chuỗi chứa ký tự duy nhất không
function task30(str){

    let  arr_char = str.split('');
    arr_char.sort();
    for(let i = 1; i < arr_char.length; ++i)
    {
        if(arr_char[i] == arr_char[i-1])
        return false
    }
    return true;
}
// chạy thử
console.log(task30("anchdgvn"));