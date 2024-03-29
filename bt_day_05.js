// Học viên thực hành ứng dụng TodoList với các chức năng sau:
const questions = [
    {
        title: "1 + 1 bằng bao nhiêu?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        title: "Số nào sau đây là số nguyên tố?",
        choices: ["22", "4", "25", "11"],
        answer: "11"
    },
    {
        title: "Căn bậc hai của 81 là bao nhiêu?",
        choices: ["7", "8", "9", "10"],
        answer: "9"
    },
    {
        title: "15% của 100 bằng bao nhiêu?",
        choices: ["10", "15", "20", "25"],
        answer: "15"
    },
    {
        title: "Số nào sau đây chia hết cho 3?",
        choices: ["14", "22", "27", "32"],
        answer: "27"
    }
];


let currentQuestionIndex = 0;
let score = 0;
let yourAnswer = [];

const titleQuestion = document.querySelector("#question p");
const choicesEl = document.querySelector(".choices");



// Hiển thị thông tin quiz ra ngoài giao diện bao gồm: Nội dung câu hỏi, danh sách câu trả lời (Tại 1 thời điểm chỉ xuất hiện 1 câu quiz)
const renderQuestion = () => {
    // lấy thông tin câu hỏi hiện tại
    const currentQuestion = questions[currentQuestionIndex];

    // hiển thị tiêu đề
    titleQuestion.innerHTML = `Câu ${currentQuestionIndex + 1}: ${currentQuestion.title}`;
    // hiển thị các lựa chọn
    let choicesHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        choicesHTML += `
            <div class="choice-item">
                <input type="radio" name="choice" id="${index}" value="${choice}">
                <label for="${index}">${choice}</label>
            </div>
        `;
    })
    choicesEl.innerHTML = choicesHTML;

}



// Người dùng thực hiện chọn câu trả lời để next sang câu tiếp theo (nếu không chọn mà next thì cần thông báo cho người dùng để chọn câu trả lời trước khi next)
const btnNext = document.querySelector("#btn-next");
const btnFinish = document.querySelector("#btn-finish");


btnNext.addEventListener("click", () => {
    // kiểm tra xem người dùng đã trả lời chưa
    const selectedChoice = document.querySelector("input[name ='choice']:checked");
    if(!selectedChoice) {
        alert("bạn chưa chọn câu trả lời");
        return;
    }
    // lưu lại đáp án người dùng chọn
    yourAnswer.push(selectedChoice.value);
    console.log(yourAnswer);

    // next câu hỏi
    currentQuestionIndex++; 
    renderQuestion();

    // khi đến câu hỏi cuối cùng 
    if (currentQuestionIndex == questions.length - 1) {
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }
});


// Nếu là câu hỏi cuối cùng trong danh sách câu hỏi thì hiển thị nút “Kết thúc” và ẩn nút “Câu tiếp theo”. Khi bấm vào nút kết thúc thì tính toán điểm cho người chơi (số lượng câu trả lời đúng). Và thông báo kết quả
    btnFinish.addEventListener("click", () => {
    const selectedChoice = document.querySelector("input[name ='choice']:checked");
    selectedChoice;
        // kiểm tra xem người dùng đã trả lời chưa
    if(!selectedChoice) {
        alert("bạn chưa chọn câu trả lời");
        return;
    }
    // lưu lại đáp án người dùng chọn
    yourAnswer.push(selectedChoice.value);
    // xóa toàn bộ thẻ div khỏi màn hình
    const divs = document.querySelectorAll("div");
    divs.forEach(function(div) {
        div.remove();
    });

    // tính điểm số của người chơi và in kết quả ra ngoài màn hình 
    const pointEl = document.createElement("p");
    document.body.appendChild(pointEl);
    pointEl.innerText = `điểm của bạn là: ${cal(0)} /100`;  
})    

// tính số điểm của người chơi 
const cal = (point) => {
    for (let i = 0; i <= questions.length - 1; i++ ) {
        if (questions[i].answer == yourAnswer[i]) {
            point = point + 20;
        } 
    }
    return point;
}

renderQuestion();