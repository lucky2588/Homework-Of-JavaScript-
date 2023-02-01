alert("Bài tập về nhà ^^ ");
// Bài 1 : Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
console.log("Bài 1 ");
console.log("Test với số 5  ");
function factorial(a) {
    if (a == 1) return 1;
    return a * factorial(a - 1);
}
// test với 5! 
console.log("Giải thừa của số 5 là : " + factorial(5));

// Bài 2 : Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó 
console.log("Bài 2 ");
function revseString(a) {
    let newString = '';
    for (let i = a.length - 1; i >= 0; i--) {
        newString += a.charAt(i);
    }
    return newString;
}
let newStringRevese = "Hello TechMaster";
console.log(`Chuỗi đảo ngược của ${newStringRevese} là ${revseString(newStringRevese)}`);

// Bài 3 : Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào 

console.log("Bài 3 ");
console.log("Test với mã VN ");
let maQuocGia = 'VN';
switch (maQuocGia) {
    case "VN":
        console.log("Xin chào !! ");
        break;
    case "EU":
        console.log("Bouja!! ");
        break;
    case "EN":
        console.log("Hello !! ");
        break;
    default:
        console.log("Không có mã Quốc Gia nào tương ứng");
        break;
}

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
console.log("Bài 4 ");
console.log("Test với chuỗi HappyNewYearrrr");
function subString(a) {
    let newString = '';
    for (let i = 0; i < a.length; i++) {
        if (i <= 10) {
            newString += a.charAt(i);
        }

        if (i > 10) {
            newString += ".";

        }
    }
    return newString;
}
let subStringgg = "HappyNewYearrrrr";
console.log(subString(subStringgg));

