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

// Nếu vế trái = null hoặc undefined -> nhảy vào vế phải
const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

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
        alert("Tên công việc không để trống!");
        return;
    }

    // Không cho thêm công việc trùng tên
    const existTask = tasks.find(
        (task) => task.name.toLowerCase() === newTask.name.toLowerCase()
    );

    if (existTask) {
        alert(`Tên công việc ${existTask.name} đã tòn tại!`);
        return;
    }

    // Thêm công việc mới vào danh sách
    tasks.unshift(newTask);

    // Lưu lại vào localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Render tasks ra UI
    renderTasks();

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
    // const html = tasks
    //     .map((task) => {
    //         return `<li>${escapeHTML(task.name)}</li>`;
    //     })
    //     .join("");

    // tasksList.innerHTML = html;

    // reset nội dung
    tasksList.innerHTML = "";

    tasks.forEach((task) => {
        const item = document.createElement("li");
        item.textContent = task.name;
        tasksList.appendChild(item)
        console.log(item);
    });
}

// Render lần đầu
renderTasks();

/* ==========================================================
 * Phòng tránh XSS:
    - Cách tạo element node
 * ==========================================================*/

function escapeHTML(str) {
    const escape = document.createElement("div");
    escape.textContent = str; // Tự động escape HTML
    return escape.innerHTML; // Lấy ra HTML
}


/* Cách tạo element node */

// const h1 = document.createElement("h1");
// h1.innerText = "Hello"

// console.log(h1);

// document.body.appendChild(h1); // Chèn vào trong thẻ body và vị trí cuối

/*  Thêm class  */
// const h1 = document.createElement("h1");
// h1.className = "abc xyz";



const li = document.createElement("li");
li.className = "task-item completed";

const span = document.createElement("span");
span.className = "task-title";
span.innerText = "Design";

const div = document.createElement("div");
div.className = "task-action";

const button1 = document.createElement("button");
button1.className = "task-btn edit";
const button2 = document.createElement("button");
button2.className = "task-btn done";
const button3 = document.createElement("button");
button3.className = "task-btn delete";

div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);

li.appendChild(span);
li.appendChild(div);

document.body.appendChild(li);

