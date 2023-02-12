const sayHello = ()=>{
alert("Hello One");
};
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

btn2.onclick =() =>{
    alert('Hello 2');
};

btn3.addEventListener("click",() =>{
alert("Hello 3 ");
} 
);

document.addEventListener('click', function (event) {
    console.log(event);
});

// document.addEventListener('click', function () {
//     console.log('click');
// })

// document.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// document.addEventListener('mousemove', function () {
//     console.log('mousemove');
// })

// document.addEventListener('mouseup', function () {
//     console.log('mouseup');
// });
document.addEventListener('click', function (event) {
    // Xóa hình tròn trước đó nếu có 
    const cycleE1 = document.querySelector(".cycle");
    console.log(cycleE1);
    if (cycleE1) {
        cycleE1.parentElement.removeChild(cycleE1);
    }
   // tạo hình tròn 
const box = document.createElement("div");
box.classList.add("cycle");
   // b2 : xét vị trí 
   console.log(event);
   box.style.left = `${event.offsetX-50}px`;
    box.style.right = `${event.offsetY-50}px`;
   // B3 : Insert vào DOM 
    document.body.prepend(box);
});