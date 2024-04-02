const btn = document.getElementById('btn');
const image = document.getElementById('image');
const result = document.querySelector(".result");
getBreedList()

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

const subList = document.getElementById("lists");
btn.addEventListener("click", getSubBreeds)

async function getSubBreeds() {
    subList.innerText = ""; // xóa kết quả cũ
    const selectVal = select.value; // lấy val mà người dùng đang chọn
    try {
        // Gọi API kiểm tra xem breed người dùng chọn có sub breed không
        let res = await axios.get(`https://dog.ceo/api/breed/${selectVal}/list`);
        console.log(res)
        if (res.data.message.length === 0) {
            const li = document.createElement("li");
            li.innerText = "không có sub breed";
            subList.appendChild(li);
        } else { // nếu mảng message có dữ liệu trả về sub breed thì lặp mảng và gán sự kiện cho thẻ <a>
            res.data.message.forEach(m => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.innerText = m;
                a.addEventListener("click", () => {
                    getRandomImage(selectVal, m);
                });
                li.appendChild(a);
                subList.appendChild(li);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

async function getRandomImage(breed, subBreed) {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
        console.log(res)
        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}

