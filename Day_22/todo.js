// 1. Chức năng Add todo
// - Lấy giá trị nhập vào input
// - Bắt sự kiện "submit" form
// - Hiển thị "task" mới vào danh sách

// Lưu ý:
// - sau khi "Add task" thì clear input
// - Hiển thị "danh sách trống" khi không có task

/* Lấy phần tử trong Dom */
const todoForm = document.querySelector("#todo-form");
const taskName = document.querySelector("#task-name");
const tasksList = document.querySelector("#tasks-list");

// Mảng lưu danh sách công việc
// const tasks = [
//     // {
//     //     name: "Cong viec 1",
//     //     isCompleted: false,
//     // },
//     // {
//     //     name: "Cong viec 2",
//     //     isCompleted: false,
//     // },
// ];

// Nếu vế trái = null hoặc undefined -> nhảy vào vế phải
const tasks = JSON.parse(localStorage.getItem("tasks")) ?? []

console.log(tasks);

// localStorage.setItem("tasks", JSON.stringify(tasks));
// const result = JSON.parse(localStorage.getItem("tasks"))

// Xử lý khi submit form
todoForm.onsubmit = (e) => {
    e.preventDefault();

    // Lấy ra công việc mới từ input
    const newTask = {
        name: taskName.value.trim(), // Loại bỏ khoảng trắng thừa (đầu & cuối chuỗi)
        isCompleted: false,
    };

    // Không thêm công việc nếu để trống
    if (!newTask.name) {
        alert("Tên công việc không để trống!")
        return;
    }

    // Không cho thêm công việc trùng tên
    const existTask = tasks.find(task => task.name.toLowerCase() === newTask.name.toLowerCase())

    if (existTask) {
        alert(`Tên công việc ${existTask.name} đã tòn tại!`)
        return
    }

    // Thêm công việc mới vào danh sách
    tasks.unshift(newTask);

    // Lưu lại vào localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Render tasks ra UI
    renderTasks()

    // Clear input & auto focus
    taskName.value = "";
    taskName.focus();
};


function renderTasks() {

    // Kiếm tr để hiển thị danh sách trống
    if (!tasks.length) {
        tasksList.innerHTML = `<li>Danh sách trống</li>`;
        return; // Thoát hàm
    }

    // Có dữ liệu "tasks" thì render
    const html = tasks
        .map((task) => {
            return `<li>${task.name}</li>`;
        })
        .join("");

    tasksList.innerHTML = html;
}

// Render lần đầu
renderTasks()


/* localStorage */
// localStorage.setItem("userName", "Nguyen Van A");
// Lưu theo Origin (gốc) 127.0.0.1:5500

// console.log(localStorage.getItem("userName"));
// console.log(localStorage.getItem("xxx")); // null

// localStorage.setItem(key, value); Thêm/sửa
// localStorage.getItem(key); Lấy
// localStorage.removeItem(key); Gỡ/Xoá

// localStorage.length
// localStorage.email
