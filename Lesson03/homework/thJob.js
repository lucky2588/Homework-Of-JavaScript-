// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.

// Trỏ vào element có chứa các element con khác
const jobTotal = document.querySelector(".jobs");
const jobOne = document.querySelector(".job-card");

let jobTwo = jobOne.cloneNode(true);
let jobThree = jobOne.cloneNode(true);
let jobFour = jobOne.cloneNode(true);
jobTotal.appendChild(jobTwo);
jobTotal.appendChild(jobThree);
jobTotal.appendChild(jobFour);
// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobTwo.querySelector("h3").innerText = "JavavaScript Developer";
jobThree.querySelector("h3").innerText = "Java Developer";
jobFour.querySelector("h3").innerText = "Python Developer";

// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
let listJob = document.querySelectorAll(".job-card");
let countJob = document.querySelector("#jobs-listed span");
countJob.innerText = listJob.length;
// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const sreachJob = document.getElementById("search");
sreachJob.addEventListener("keyup", function () {
    let value = this.value;
    Array.from(listJob).forEach((Element) => {
        let titleJob = Element.querySelector("h3").innerText;
        if (titleJob.toLowerCase().includes(value.toLowerCase())) {
            Element.style.display = `block`;
        } else {
            Element.style.display = `none`;
        }
    }
    )
});
// Nhấn tất cả công việc để ra cv ms 
const allJob = document.getElementById("show-all");
allJob.addEventListener("click", () => {
    listJob.forEach(job => {
        job.style.display = "block";
    })
    sreachJob.value = "";
});




