// Lý thuyết về Js Dom
// DOM HTML 
// Document Object Model (DOM) được tạo ra bởi trình duyệt khi trang web được tải 
// DOM được tổ chức  theo mô hình cây : , mỗi cái thành phần của cây được gọi là một node 
// với JS Dom ta có thể : 
// thay đổi phần tử HTML 
// thay đổi thuộc tính phần tử trong HTML 
// thay đổi syte CSS 
// Xóa phần tử và thuộc tính hiện có 
// Tạo phần tử mới và thuộc tính mới 
// Tạo sự kiện mới 
// Phản ứng với sự kiên 

// Dom có 3 thành phần : Elem ; Atribube ; Text 

// js không có DOM , mà thông qua API Web nhờ vào phần tử Document để trỏ đến DOM trong HTML 
// có thể lấy Element DOM thông qua : ID , Class , tag ( tên thẻ ) , CSS seletor , HTML  Conlection 
// Cách lấy các thẻ Element trong Javaspirt : tất cả phải thông qua doucument vì nó là thằng bao trùm 

// 1 . Lấy bằng ID 
const textOne = document.getElementById("heading-one");
console.log(textOne); // nó sẽ in ra cả thẻ HTML 
console.log(textOne.innerHTML); // in ra nội dụng HTML
console.log(
    {
        Element: textOne
    }
);
// 2. Lấy bằng Class
// document.getElementsByClassName lấy ra danh sách các node cùng có class 
const textTwo = document.getElementsByClassName('heading-two');
console.log(textTwo);


// document.querySelector : trả về phần tử đầu tiên của class
const xTwo = document.querySelector(`.heading-three`);
console.log(xTwo);
 // muốn lấy ra thẻ h3 đầu tiền trong thẻ div
 const textThree = document.querySelector(".box .textThee:nth-child(2)");
 console.log(textThree); 

const textAll = document.querySelectorAll(".textThee");
console.log(textAll);
// muốn in ra cách đầu tiền là duyệt mảng 
// cách 2 : 
console.log(textAll[1]);
// lưu ý 1 nodeList và 1 element là khác nhau 
// Cách 3 : xác định thẻ cha và trỏ từ cha để lấy thẻ con 
const textChoose = document.querySelector(".box");
const textTh = textChoose.querySelector("h3:nth-child(3)");
console.log(textTh);
textTh.style.color = 'red';
// Nếu muốn in danh sách trong một nodeList thì ta thông qua cách duyệt phần tử
const listNode = document.querySelectorAll(".textThee");
listNode.forEach(Element =>
    console.log(Element.innerHTML) // ví đây là một List node nên ngoài các vòng
    //  lặp for thì không thể dùng các phương thức giống Array
); 
// Nếu một sử dụng các hàm trong Array thì phải convers từ List Node sang arrays
Array.from(listNode).map(ele =>
    {
        ele.style.fontSize = "20px";
    }
    )

// Thêm một Element vào trong DOM , bước 1 : xác định được thẻ cha trước 

 // tạo mới một phần tử muốn thêm 
  const newText = document.createElement("button");
  newText.innerText = "Click Me ^^ ";

// thêm ở cuối trong thẻ cha 
document.body.appendChild(newText);

// thêm ở đầu 
document.body.prepend(newText);
// Muốn thêm ở giữa các thẻ trong thẻ cha 
const textTwoTest = document.querySelector(".heading-two");
document.body.insertBefore(newText,textTwoTest); // thêm ở trước Element 2 
textChoose.insertBefore(newText, textTh);

// Một số cách insert chi tiết và cụ thể hơn 
 // Giả sử ta có Element A sẽ có 4 position để thêm vào thẻ này : 

  // 1. beforebegin : trước thẻ A 
// 2. afterbegin : sau thẻ A 
 // 3 .beforeend : trong thẻ A ở sau last child 
 // 4. afterend : vị trí trước Element 

textOne.insertAdjacentElement("beforeend",newText);

// Thay thể Phần tử 

textChoose.replaceChild(newText, textTh);
// Xóa phần tử : 
//  textChoose.removeChild(textTh); // đã xóa 


// Thao tác với các ClassList với các phương thức sau 
 // hàm add() : thêm class 
 // hàm remove : Xóa class 
 // hàm contains : có chưa hay ko : trả về true or false 
// hàm trogge() : nếu có chứa thì xóa , ko thì thêm 
textOne.classList.add("heading-Oneee");
console.log(textOne);

// check hàm troggge  kiểm tra xem có hay không , lặp lại trong 1s
// setInterval(()=>{
//     console.log(textOne.classList.toggle("heading-Oneee"))
// },1000);


const timeOut = document.getElementById("time-out");
const textTime = document.getElementById("count-down");
let time = 10;
const countDown = setInterval(
    () => {
        time--;
        timeOut.innerText = `${time}s`
        if(time == 0){
            clearInterval(countDown);
            textTime.innerText = "Happy new Year";
        }
    },1000
);


// Hãy áp dụng DOM để hiển thị ngày giờ hiện lại lên giao diện
	// Mỗi giây cập nhật 1 lần;
const timeDate = document.getElementById("time-date");
const newDate = setInterval(
    ()=>{
        let date = new Date();
        timeDate.innerText = `${date}`;
    },1000
);
