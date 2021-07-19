const prompt = require('prompt-sync')();
// Tạo hàm nhập và xuất mảng
function nhapArray(row,col)
{
    let arr = [];
    for(let i = 0; i < row; i++)
    {
        arr[i] = [];
        for(let j = 0; j < col; j++)
        {
            arr[i][j] = parseInt(prompt("nhập phần tử arr["+i+"]["+j+"]: " ));
            
        }
    }
    return arr;

}
function xuatArray(arr){ console.table(arr);}
function maxArray()
{
    // làm sao để truyền tham số là mảng 2 chiều vào hàm 
}

let n = parseInt(prompt("nhập số dòng N: " ));
let m = parseInt(prompt("nhập số cột M: " ));
console.log("Nhập mảng có "+n+" dòng và "+m+"cột: " );
let matran = nhapArray(n,m);
xuatArray(matran);
maxArray(matran);
// Tìm  và in ra giá trị max trong mảng
let max = matran[0][0]
for(let i = 0; i < matran.length; i++)
{
    for( let j = 0; j < matran[i].length; j++)
    {
        if(matran[i][j] >= max)
        {
            max = matran[i][j];
        }
    }
}
console.log(" Giá trị lớn nhất của ma trận là: ", max);

// Hàm tìm giá trị min trong mảng
let min = matran[0][0];
for(let i = 0; i < matran.length; i++)
{
    for( let j = 0; j < matran[i].length; j++)
    {
        if(matran[i][j] <= min)
        {
            min = matran[i][j];
        }
    }
}
console.log(" Giá trị nhỏ nhất của ma trận là: ", min);

// Hàm tìm giá k trong mảng
let k = parseInt(prompt("nhập giá trị k : "));
let timthay = false;
let vitri;
for(let i = 0; i < matran.length; i++)
{
    for( let j = 0; j < matran[i].length; j++)
    {
        if(matran[i][j] == k)
        {
            timthay = true;
            vitri = "["+i+"]["+j+"]";
            break;
        }
    
    }
}
if(timthay == true)
{
    console.log("vị trí của k trong ma trận là :" + vitri );
}
else
{
    console.log("vị trí của k trong ma trận là : [-1][-1]" );
}



