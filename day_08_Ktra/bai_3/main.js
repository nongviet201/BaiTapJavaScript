/*Kiểm tra API*/
const postBtn = document.getElementById("post");
const photoBtn = document.getElementById("photos");
const albumBtn = document.getElementById("albums");
const mainContent = document.getElementById("main");
const title = document.getElementById("title");

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            mainContent.innerHTML = ''; // Xóa danh sách hiện tại
            data.forEach(item => {
                const content = document.createElement('li');
                content.innerText = item.title;
                mainContent.appendChild(content);
            });
        })
        .catch(error => console.error('Error:', error));
}

function resetBtnCorlor() {
    postBtn.style.backgroundColor = "#EFEFEF";
    postBtn.style.color = "black";
    albumBtn.style.backgroundColor = "#EFEFEF";
    albumBtn.style.color = "black";
    photoBtn.style.backgroundColor = "#EFEFEF";
    photoBtn.style.color = "black";
}

postBtn.addEventListener("click", ()=>{
    post();
})


photoBtn.addEventListener("click", ()=>{
    getData('https://jsonplaceholder.typicode.com/photos');
    resetBtnCorlor();
    title.innerText = "Type: Photos"
    photoBtn.style.backgroundColor = "red";
    photoBtn.style.color = "#EFEFEF";
})

albumBtn.addEventListener("click", ()=>{
    getData('https://jsonplaceholder.typicode.com/albums');
    resetBtnCorlor();
    title.innerText = "Type: Albums"
    albumBtn.style.backgroundColor = "red";
    albumBtn.style.color = "#EFEFEF";
})

function post(){
    getData('https://jsonplaceholder.typicode.com/posts');
    resetBtnCorlor();
    title.innerText = "Type: Posts"
    postBtn.style.backgroundColor = "red";
    postBtn.style.color = "#EFEFEF";
}

post();