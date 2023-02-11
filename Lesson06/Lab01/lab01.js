// Bài 1 :  Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
console.log("Bài 1")

let lookString = (arr) =>
{
    let newArr = [];
    let listCount = [];
    for (let i = 0; i < arr.length ; i ++){
        listCount.push(arr[i].length)
    }
    let maxCount = listCount[0];
    for (let i = 0; i < listCount.length ; i ++){
        if (listCount[i].length > maxCount){
            maxCount = listCount[i].length;
        }
    }
    for(let i = 0; i < arr.length ; i++){
        if (arr[i].length == maxCount){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("Các chuỗi có độ dài lớn nhất là : ")
let arr = ['aba', 'aa', 'ad', 'c', 'vcd'];
console.log(lookString(arr));

// Bài 2 : 
console.log("Bài 2.1")
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];
// Viết mảng trả về các OBJ có tuổi lớn hơn 25 và isStatus là true 
const mUser = (arr) => {
    return arr.filter(ele => ele.age > 25 && ele.isStatus);
};
console.log("Danh Sách Users có tuổi lớn hơn 25 và có isStatus bằng true")
console.log(mUser(users));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
let ascAge = (arr) => 
{
    let xAge = [];
    let newUser = [];
    for(let i =0 ; i < arr.length ; i++){
           xAge.push(arr[i].age);
    }
    xAge.sort();
  for(let i =0 ; i < xAge.length ; i ++){
     for(let y =0 ; y < arr.length ; y++){
       if(xAge[i] == arr[y].age){
        newUser.push(arr[y]);
       }
     }
  }
    return newUser;
}
console.log("Các Đối Tưởng Trong Mảng Sau Khi đã Sắp Xếp theo thứ tự Tăng dần ")
console.log(ascAge(users));


// Bài 3 : 
console.log("Bài 3 ");
let listString = ["one", "two", "three", "one", "one", "three"];

let countString = (arr) => {
  let count = {};
  for(let i = 0 ; i < arr.length;i++){
    let elem = arr[i];
    if(count[elem] === undefined){
             count[elem] = 1;
    }else{
            count[elem]++;
    }
  }
  return count;
};
console.log("in ra một obj trả về số lượng từng phần tử là ")
console.log(countString(listString));


