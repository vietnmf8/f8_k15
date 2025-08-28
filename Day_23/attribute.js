/* Property */

// const h1 = document.querySelector("h1"); // element node
// console.log(h1); // object

// // h1.id = 'heading'; // Sửa Property: id
// // h1.className = 'abc'; // Sửa Property: class
// // h1.title = 'Đây là tiêu đề'; // Sửa Property: title
// // h1.hidden = false; // Sửa Property: hidden

// /* Attribute */
// console.log(h1.getAttribute("title")); // Lấy Attribute: id
// h1.setAttribute("title", "Đây là tiêu đề 2"); // Sửa Attribute: title
// // h1.setAttribute('hidden', ''); // Tạo Attribute mới: hidden
// h1.hasAttribute("title"); // Kiểm tra Attribute: title
// h1.toggleAttribute("hidden"); // Nếu có thì xóa, không có thì tạo mới Attribute: hidden
// h1.toggleAttribute("hidden", true); // Luôn bật
// h1.toggleAttribute("hidden", false); // Luôn tắt
// h1.removeAttribute("title"); // Xóa Attribute: title

// /* Khác nhau */
// const a = document.querySelector("a");
// console.log(a.href); // Property: http://127.0.0.1:5500/Day_23/abc.html (Đã được tính toán đầy đủ)
// console.log(a.getAttribute("href")); // Attribute: ./abc.html

// const input = document.querySelector("input");
// console.log(input.value); // Property: (Giá trị người dùng nhập vào(giá trị hiện tại)), không phải attribute vì trong thẻ input không có thuộc tính value (giá trị khởi tạo)

// /* ==========================================================
//  * Class
//  * ==========================================================*/

// const tag = document.querySelector("#box");

// tag.className = "abc"; // Gán class

// // add, contains, remove, replace, toggle
// tag.classList.add("red", "blue"); // Thêm class
// tag.classList.contains("red"); // Kiểm tra xem có class không
// tag.classList.remove("red"); // Xóa class
// tag.classList.replace("blue", "green"); // Thay thế class
// tag.classList.toggle("green"); // Nếu có thì xóa, không có thì thêm

// /* ==========================================================
//  * Style CSS
//  * ==========================================================*/
// // Cách 1
// h1.style.color = "red"; // Thêm style trực tiếp
// h1.style.width = "100px";
// h1.style.backgroundColor = "blue"; // Chuyển từ background-color sang backgroundColor

// // Cách 2: sao chép (copy) các thuộc tính từ một hoặc nhiều object nguồn (source objects) sang object đích (target object).
// // object.assign(target, ...sources)
// Object.assign(h1.style, {
//     color: "blue",
//     width: "300px",
//     height: "100px",
//     backgroundColor: "red",
// });

// // Cách 3: dùng trực tiếp CSS --> Ghi đè inline
// h1.style.cssText = `
//     color: green;
//     width: 500px;
//     height: 200px;
//     background-color: yellow;
// `;

// // Chèn css bằng thẻ style
// const style = document.createElement("style");
// style.innerHTML = `
//     body {
//         background-color: pink;
//     }
//     h1 {
//         font-size: 50px;
//         text-transform: uppercase;
//     }
// `;
// document.head.appendChild(style);


/* ==========================================================
 * Kích thước phần tử
 * ==========================================================*/

const tag = document.querySelector("#box");
/* Kích thước */
tag.clientWidth; // width + padding (không bao gồm border, margin, thanh cuộn) -> 120
tag.clientHeight; // height + padding (không bao gồm border, margin, thanh cuộn) -> 120

tag.offsetWidth; // width + padding + border (không bao gồm margin, thanh cuộn) -> 140
tag.offsetHeight; // height + padding + border (không bao gồm margin, thanh cuộn) -> 140

/* Vị trí */
tag.clientTop; // Trả về khoảng cách tính  từ mép trên nội dung bên trong (content area) đến mép trên border (viền) của element --> Chính là độ dày của border-top (nếu có).
tag.clientLeft; // Trả về khoảng cách tính từ mép bên trái nội dung bên trong (content area) đến mép bên trái border (viền) của element --> Chính là độ dày của border-left (nếu có).
tag.offsetTop; // Trả về khoảng cách từ mép trên của element hiện tại đến mép trên của phần tử cha offsetParent gần nhất.
tag.offsetLeft; // Trả về khoảng cách từ mép trái của element hiện tại đến mép trái của phần tử cha offsetParent gần nhất.