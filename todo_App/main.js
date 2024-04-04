//1.Hiển thị danh sách công việc ban đầu, nếu không có công việc nào trong danh sách thì hiển thị Danh sách công việc trống
//Lấy danh sách toDo trên server
let toDoList =[]
const API_URL = "http://localhost:8000/toDo"
const getAllToDoList = async()=>{
    try{
        const res = await axios.get(API_URL)
        console.log(res)
        toDoList=res.data;
        renderToDoList(toDoList)
    }catch(err){
        console.log(err)
    }
}

const ul = document.querySelector("ul")
const renderToDoList = (toDoList)=>{
    ul.innerHTML="";
    if (toDoList.length===0) {
        ul.insertAdjacentHTML("afterbegin","<li>Danh sách công việc trống</li>")
        return;
    }
    let html="";
    toDoList.forEach(toDo => {
        html+=`
        <li>
            <input 
            type="checkbox" 
            ${toDo.status ? "checked" : ""}
            onchange="toggleStatus(${toDo.id})"
            />
            <span class=${toDo.status ? "active" : ""}>${toDo.title}</span>
            <button onclick ="editToDo(${toDo.id})">Edit</button>
            <button onclick ="deleteToDo(${toDo.id})">Delete</button>
        </li>
        `
    })
    ul.innerHTML=html;
}

//2. Thêm công việc mới (nếu title rỗng -> alert “Tên công việc không được để trống”)

const inputToDo = document.getElementById("input-todo");
console.log(inputToDo)
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click",async()=>{
    //lấy nd trong ô input
    const title = inputToDo.value.trim();

    //kiểm tra nd có rỗng ko
    if(title===""){
        alert("Vui lòng nhập công việc")
        return;
    }
    //Tạo ra to do mới
    const newToDo = {
    title: title,
    status: false
    }

    try {
        const res = await axios.post(API_URL,newToDo)
         //Thêm vao mảng
        toDoList.push(res.data);
          //Render lại giao diện mới
        renderToDoList(toDoList);
        inputToDo.value=""
        inputToDo.focus()
    } catch (error) {
        console.log(error)
    }
})

//3. Xóa công việc (cần confirm trước khi xóa, sử dụng window.confirm)
const deleteToDo = async (id)=>{
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa ko")
    if(confirm){
        try {
            const res = await axios.post(API_URL + "/" + id)
            toDoList.push(res)
            //Render lại giao diện mới
            renderToDoList(toDoList);
            inputToDo.value=""
            inputToDo.focus()
        } catch (error) {
            console.log(error)
        }
    }
}


//4. Chỉnh sửa tiêu đề công việc (sử dụng window.prompt cho đơn giản)
const editToDo = (id)=>{
    toDoList.forEach(async(toDo) =>{
        if (toDo.id===id) {
        let title= window.prompt("Mời bạn nhập công việc khác",toDo.title)
        if( title== ""){
            alert("Vui lòng nhập công việc")
            return;
        }
        if(title==null){
            return
        } 
        
        const newToDo = {
            title: title,
            status: false
            }

        try {
            const res = await axios.put(API_URL + "/" + id, newToDo)
            toDoList.put(res);
            //Render lại giao diện mới
            renderToDoList(toDoList);
            inputToDo.value=""
            inputToDo.focus()
        } catch (error) {
            console.log(error)
        }

        renderToDoList(toDoList)
    } 
})
    toDo.title=title;
    
}

//5. Thay đổi trạng thái công việc (status)



const toggleStatus = async(id) => {
    const todo = todos.find(todo => todo.id === id)

    const newStatus = {
        title: todo.title,
        status: !todo.status
    }

    try {
        const response = await axios.put(API_URL + "/" + id, newStatus)
        if(response.status === 200) {
            todo.status = !todo.status
            renderTodos(todos)
        } else {
            console.log("không cập nhật được trạng thái")
        }
    } catch (error) {
        console.log
    }
    renderTodos(todos)
}


// thêm chức năng tìm kiếm 
const btnSearch = document.getElementById("btn-sreach");
const inputSearch = document.getElementById("sreach-input-todo");

btnSearch.addEventListener("click", async () => {
    const titleSearch = inputSearch.value.trim();
    if (titleSearch === "") {
        alert("Bạn chưa nhập công việc cần tìm kiếm");
        return;
    }

    try {
        const response = await axios.get(`${API_URL}?q=${titleSearch}`);
        // render ra công việc được tìm kiếm
        renderTodos(response.data);
        inputSearch.value = "";
    } catch (error) {
        console.log(error);
    }
});
getAllToDoList();