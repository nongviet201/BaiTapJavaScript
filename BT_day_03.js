// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.


const p = document.createElement("p");
p.id= "text";
p.style.color= "#777";
p.style.fontSize= "2rem";
p.innerHTML="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
document.body.appendChild(p);

//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
li.forEach(li => {
    li.style.color = "blue";
})

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const li8 = [document.createElement("li"), document.createElement("li"), document.createElement("li")];
const ul2 = document.getElementById("list");
let i = 8;
Array.from(li8).map(li => li.innerText = `Item ${i++}`);
li8.forEach(li8 => {
    ul2.appendChild(li8);
})


// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1ul2 = ul2.querySelector("li");
li1ul2.style.color= "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
ul2.querySelector(`#list li:nth-child(3)`).style.backgroundColor= "blue";

// Remove thẻ <li> 4
ul2.removeChild(ul2.querySelector(`#list li:nth-child(4)`));


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const li4ul2 = document.createElement("li");
li4ul2.innerText= "alo alo";
ul2.insertBefore(li4ul2, document.querySelector(`#list li:nth-child(4)`));
