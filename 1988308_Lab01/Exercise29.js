const prompt = require('prompt-sync')();
// Hàm Tìm ra chuỗi dài nhất trong mảng
function findMaxLeghtString(arr){

    let  max = arr[0].length;
    arr.map(chuoi => max = Math.max(max, chuoi.length));
    result = arr.filter(v => v.length == max);
    return result;
}
// Gọi hàm
console.log(findMaxLeghtString(["cat", "dog","pig", "is"]));