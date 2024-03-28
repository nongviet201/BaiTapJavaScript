let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
const boxes = document.querySelector('.boxes');


// Yêu cầu
// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
//Tạo 5 box khi vừa khởi động web
document.addEventListener('DOMContentLoaded', () => {createBox();});

// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
 // hàm vòng lặp tạo box và thêm màu
 const createBox = () => {
    for (let i = colors.length - 1; i >= 0; i--) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box')
    boxEl.style.backgroundColor = colors[i];
    boxes.prepend(boxEl);
    // thêm sự kiện cho box được tạo ra
    boxDl(boxEl);
 } 
 countBox();
 }



// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
// tạo sự kiện khi click vào button
const button = document.getElementById('btn');
button.onclick= () => {createBox()};


// Cập nhật số lượng total box trong thẻ <span> có class “points”
let points = document.querySelector(".points");
const countBox = () => {
    count = boxes.getElementsByTagName("div");
    points.innerHTML =  ` ${count.length}`;
};


// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
const boxList = boxes.querySelectorAll(".box");
 // hàm tạo sự kiện khi ấn vào sẽ xóa box được ấn
const boxDl = (box) => {
       box.addEventListener("click", () => {
        boxes.removeChild(box);
        countBox();
    }) 
}
    