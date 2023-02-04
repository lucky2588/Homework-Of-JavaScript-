// luyện tập về Obj trong Js 
console.log(`Bài tập về Obj trong Js`);

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
];

// Bài 1 . In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
console.log(`Bài 1 `)
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(` Tên SP: ${arr[i].name}   -Giá SP : ${arr[i].price} - Thưong Hiệu : ${arr[i].brand} - Count : ${arr[i].count}`);
    }
};
console.log(` Danh Sách Sản Phẩm `)
printArr(products);
// Câu 2 : // 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
console.log(`Bài 2  `)
function sumProduct(arr) {
    let sumProduct = arr.reduce(function (total, elem) {
        return total + (elem.price * elem.count);
    }, 0)
    return sumProduct;
};
console.log("Tổng Giá trị các  SP là " + sumProduct(products));
// Câu 3 :  Tìm các sản phẩm của thuơng hiệu "Apple" 
console.log(`Bài 3 `);
const filterBrand = arr => {
    return arr.filter(p => p.brand == "Apple");
};
console.log(`Các Sp có thương hiệu Apple `)
console.log(filterBrand(products));

//  Câu 4 : Tìm các sản phẩm có giá > 20000000
console.log(`Bài 4 `)
const findProduct = (arr, prince) => {
    return arr.filter(p => p.price > prince);
};
console.log(findProduct(products, 20000000));


// Bài 5 : Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường) 
console.log(`Bài 5 `)
const findText = (arr, text) => {
    return arr.filter(elem => elem.name.includes("Pro"));
}
console.log(`Các Sản Phẩm có chứa từ Pro trong tên là `);
let textFind = "Pro"
console.log(findText(products, textFind));

// Bài 6 : Thêm 1 sản phẩm bất kỳ vào trong mảng product
const addElem = (arr) => {
    let obj = {
        name: "Galaxy S22 Ultra",
        price: 22000000,
        brand: "Samsung",
        count: 1,
    };
    arr.push(obj);
};
console.log(`Thêm 1 sản phẩm `);
addElem(products);
printArr(products);

// Bài 7 :  Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log(`Bài 7 `)
const deletElem = (arr, nameBrand) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].brand.includes(nameBrand)) {
            arr.splice(i, 1);
        }
    }
};
console.log('Xóa tất cả SP có thương hiệu Samsung ');
console.log("Danh Sách sau khi xóa ");
deletElem(products, "Samsung");
printArr(products);
// Bài 8 : Sắp xếp giỏ hàng theo price tăng dần
const sortArr = (arr) => {
    let arrSort = [];
    for (let i = 0; i < arr.length; i++) {
        arrSort.push(arr[i].price);
    }
    console.log(arrSort);
    arrSort.sort();
    console.log(`Sắp xếp Mảng theo Giá SP tăng dần `);
    for (let i = 0; i < arrSort.length; i++) {
        for (let y = 0; y < arr.length; y++) {
            if (arrSort[i] == arr[y].price) {
                console.log(`Tên SP : ${arr[y].name} - Giá SP : ${arr[y].price}`);
            }
        }
    }
}
sortArr(products);

// Bài 9 : 
console.log(`Bài 9 `)
const sortArrDesc = (arr) => {
    let arrSort = [];
    for (let i = 0; i < arr.length; i++) {
        arrSort.push(arr[i].count);
    }
    function compareNumbers(a, b) {
        return b - a;
    }
    arrSort.sort(compareNumbers);
    console.log(`Sắp xếp Mảng theo Số Lượng SP giảm dần `);
    for (let i = 0; i < arrSort.length; i++) {
        for (let y = 0; y < arr.length; y++) {
            if (arrSort[i] == arr[y].count) {
                console.log(`Tên SP : ${arr[y].name} - Giá SLượng : ${arr[y].count}`);
            }
        }
    }
}
sortArrDesc(products);

// Bài 10 : Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log(`Bài 10 `);
function randomProduct(arr) {
    let randomNumbers = Math.floor(Math.random() * (arr.length - 1));
    for (let i = 0; i < 2; i++) {
        console.log("Tên SP " + arr[randomNumbers].name + " - Brand : " + arr[randomNumbers].brand);
    }
};
randomProduct(products);
