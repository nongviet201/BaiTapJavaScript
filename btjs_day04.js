// Events là các hành động xảy ra khi người dùng tương tác với trang web

const sayHello = () => {
    alert("xin chào các bạn");
}

// Sử dụng với DOM property
const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    alert("xin chào các bạn 2");
}


// Sử dụng với addEventListener
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {alert("xin chào các bạn 3")})
///////////////////////////////////////// ////////////////////

// Yêu cầu 1:
// Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ

const content = [
    "Bánh mì là một loại baguette của Việt Nam với lớp vỏ ngoài giòn tan, ruột mềm, còn bên trong là phần nhân. Tùy theo văn hóa vùng miền hoặc sở thích cá nhân mà người ta có thể lựa chọn nhiều loại đồ ăn kèm khác nhau, ngoài ra tên gọi của bánh cũng phụ thuộc phần lớn vào những biến tấu ấy.",
    "Ngộ độc paracetamol là tình trạng dùng quá liều thuốc paracetamol (acetaminophen). Hầu hết bệnh nhân có ít triệu chứng hoặc có triệu chứng không đặc hiệu trong 24 giờ đầu sau khi dùng quá liều thuốc này",
    "Giáo hội Công giáo tại Việt Nam trên thực tế đã có giám mục bản xứ đầu tiên vào năm 1933, và khi hàng giáo phẩm Công giáo tại Việt Nam chính thức được thành lập vào năm 1960; tuy vậy, cho năm 1976, mới có một giám mục người Việt được nhận tước hiệu hồng y",
    "Wikipedia là dự án bách khoa toàn thư mở, đa ngôn ngữ mà mọi người đều có thể tham gia đóng góp. Mục tiêu của Wikipedia là xây dựng một bách khoa toàn thư hoàn chỉnh, chính xác và trung lập."
];

const p = document.querySelector("p");

const changeContent = () => {
    p.innerText = content[Math.floor(Math.random() * content.length)];
}

// Yêu cầu 2:
// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

const bt2 = document.getElementById("btn-2");
bt2.onclick = () => {
    p.style.color = randomHexColorCode();
}


// Yêu cầu 3:
// Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)
const bt3 = document.getElementById("btn-3");
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

bt3.addEventListener("click", () => {p.style.backgroundColor = random_bg_color()})
