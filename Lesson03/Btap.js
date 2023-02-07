console.log(`Bài 1 `);
let xOne = document.getElementById("heading");
xOne.style.color = "red";
console.log(xOne.innerHTML);

// Bài 2 : Thay đổi màu chữ của tất cả thẻ có class “para”
// thành màu “blue” và có font - size = “20px”

const paraText = document.querySelectorAll(".para");
paraText.forEach(element => {
    element.style.color ="blue";
    element.style.fontSize ="20px";
});
 // Câu 3 : Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let xLink = document.createElement("p");
xLink.innerHTML = "https://www.facebook.com/thangtaiba.nguyenducthang/";
xParaThree = document.querySelector(".para-3");
xParaThree.insertAdjacentElement("afterend", xLink);

// Câu 4 : Thay đổi nội dung của thẻ có id=“title” 
//thành “Đây là thẻ tiêu đề”
let xTilte = document.getElementById("title");
xTilte.innerHTML = "Đây là tiêu đề ";

// Câu 5  Thêm class “text - bold” vào thẻ có class=“description”
// (định nghĩa class “text - bold” có tác dụng in đậm chữ)

let xThree = document.querySelector(".description");
xThree.classList.add("text-bold");

// Câu 5 : Thay thế thẻ có class=“para-3” 
// thành thẻ button có nội dung là “Click me”
const xBottom = document.createElement("button");
xBottom.innerText = "Click me";

document.body.replaceChild(xBottom,xParaThree);

// Câu 6 : Copy thẻ có class=“para-2” 
 // và hiển thị ngay đằng sau thẻ đó
 
 xParaTwo = document.querySelector(".para-2");
xParaClone = xParaTwo.cloneNode(true);
xParaTwo.insertAdjacentElement("afterend",xParaClone);

// Câu 7 : Xóa thẻ có class=“para-1”
let xParaOne = document.querySelector(".para-1");
body.removeChild(xParaOne);
