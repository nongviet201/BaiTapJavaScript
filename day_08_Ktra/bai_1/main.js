/*Kiểm tra Javascript cơ bản*/

// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(arr) {
    let maxLength = 0;
    let stringMaxLength = [];
    for (let i = 0; i < arr.length; i++) {
        const currentLength = arr[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            stringMaxLength = [arr[i]]; 
        } else if (currentLength === maxLength) {
            stringMaxLength.push(arr[i]);
        }
    }
    return stringMaxLength;
}

//Bài 2. Cho mảng users như sau:

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
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function filterUser1(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
}
console.log(filterUser1(users));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function filterUser2(users) {
    return users.sort((a, b) => a.age - b.age);
}
console.log(filterUser2(users));

