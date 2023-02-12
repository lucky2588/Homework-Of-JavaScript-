// Bài 1 : 
const textOne = document.getElementById("text");
textOne.style.backgroundColor = "#777";
textOne.style.fontSize ="2rem";
textOne.innerHTML ="Tôi có thể làm <em>Bất cứ điều gì </em> tôi muốn với Javaspirt"
// Bài 2 : 
const listNode = document.querySelectorAll("ul li");
listNode.forEach(
    ele =>{
        ele.style.color = "blue"
    }
);

// Bài 3 : 
const ItemEleven = document.createElement("li");
ItemEleven.innerText = "Item 8"
const ItemNight = document.createElement("li");
ItemNight.innerText = "Item 9"
const ItemTen = document.createElement("li");
ItemTen.innerText = "Item 10"
const nodeHead = document.getElementById("list");
nodeHead.appendChild(ItemEleven);
nodeHead.appendChild(ItemNight);
nodeHead.appendChild(ItemTen);

const nodeOne = document.querySelector("#list li");
nodeOne.style.color = "red";

const nodeThree = document.querySelector("#list li:nth-child(3)");
nodeThree.style.backgroundColor = "green";

const nodeFour = document.querySelector("#list li:nth-child(4)");
nodeHead.removeChild(nodeFour);

const newNode = document.createElement("li");
newNode.innerText = "Đây là item Thay thế";
nodeThree.insertAdjacentElement("afterend",newNode);

