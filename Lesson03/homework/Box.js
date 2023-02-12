let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];
let currentColors = [...colors];

let btn = document.querySelector("#btn");
let point = document.querySelector(".points");
let boxes = document.querySelector(".boxes");

let renderBox = (arr) => {
    boxes.innerHTML = "";
    let html ="";
    arr.forEach((element , index) => {
        html += `
        <div class = "box" ; style = "background-color:${element}"
        onclick = "removeBox(${index})">
        </div>`
    });
    boxes.innerHTML = html;
    point.innerText = arr.length;
}
renderBox(colors);
btn.addEventListener("click",()=> {
   currentColors = [...currentColors,...colors];
    renderBox(currentColors);
});


let removeBox = (index) => {
  currentColors.splice(index,1);
    renderBox(currentColors);
}




