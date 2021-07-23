// Tìm  và in ra giá trị max trong ma trận mảng 2 chiều
function max(matran)
{
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
    return max;
}
// Hàm tìm giá trị min trong mảng
function min (matran)
{
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
    return min;
}
// Hàm tìm k trong mảng
function find(matran, k)
{
    let vitri = "(-1;-1)";
    for(let i = 0; i < matran.length; i++)
    {
        for( let j = 0; j < matran[i].length; j++)
        {
            if(matran[i][j] == k)
            {
                vitri = "["+i+"]["+j+"]";
                break;
            }
        
        }
    }
    return vitri;
}

// Chạy thử ma trận 3 dòng, 4 cột
let matran = [
    [10,20,13,21],
    [22,34,15,70],
    [68,36,69,14]
]
console.log("Giá trị max cua ma trận: ", max(matran));
console.log("Giá trị min của ma trận: ", min(matran));
console.log("vị trí: ", find(matran,14));


