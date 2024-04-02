const btn = document.getElementById('btn');
const image = document.getElementById('image');
const result = document.querySelector(".result");

getBreedList()

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all


async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}


const select = document.querySelector("#breed-list");
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
function renderBreed(breeds) {
    let html = "";
    for (const key in breeds) {
        html += `
        <option value="${key}">${key}</option>
        `
    }
    select.innerHTML = html;
    
}

let listEl = "";
const subList = document.getElementById("lists");
btn.addEventListener("click", () => {
    const selectVal = select.value;
    
    // tạo thẻ li và thẻ a để thêm vào sub breeds list
    const li = document.createElement("li");
    const a = document.createElement("a");

    // sửa nội dung thẻ a và thêm sự kiện khi click
    a.innerText = selectVal;
    a.addEventListener("click", () => {
        getRandomImage(selectVal);
    });
    li.appendChild(a);
    subList.appendChild(li);
});


async function getRandomImage(val) {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get(`https://dog.ceo/api/breed/${val}/images/random`);
        console.log(res)
        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}

