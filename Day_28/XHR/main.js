/**
 * XHR
 * Phương thức:
    - GET: lấy dữ liệu về
    - POST: gửi dữ liệu đi
 */

const postList = document.querySelector("#post-list");
const commentList = document.querySelector("#comment-list");

// /* Tạo đối tượng XHR */
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true ) // true: async | false: sync
// xhr.onload = function () {
//     // Kiểm tra nếu HTTP code thành công!🎉
//     if (this.status >= 200 && this.status < 400) {
//         const posts = JSON.parse(this.responseText);
//         renderPosts(posts);
//     }
// }
// xhr.send()

// /* Hàm render post */
// function renderPosts(posts) {
//     list.innerHTML = posts.map(post => {
//         return `<li>${post.id}. ${post.title}</li>`
//     }).join("")
// }

/**
 * Callback (Hàm gọi lại):
 * - Là một hàm.
 * - Được truyền dưới dạng đối số khi gọi một hàm khác (không phải gọi hàm).
 * - Gọi lại bên trong hàm đó.
 *
 * Mục tiêu: Thông báo hoàn thành công việc khi xử lý bất đồng bộ
 */

/* Hàm gửi dữ liệu đi */
function send(method, url, callback) {
    // Tạo đối tượng XHR
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true); // true: async | false: sync
    xhr.onload = function () {
        // Kiểm tra nếu HTTP code thành công!🎉
        if (this.status >= 200 && this.status < 400) {
            const data = JSON.parse(this.responseText);
            callback(data);
        }
    };
    xhr.send();
}

/* Posts */
send("GET", "https://jsonplaceholder.typicode.com/posts", (posts) => {
    postList.innerHTML = posts
        .map((post) => {
            return `<li>${post.id}. ${post.title}</li>`;
        })
        .join("");
});

/* Comments */
send("GET", "https://jsonplaceholder.typicode.com/comments", (comments) => {
    commentList.innerHTML = comments
        .map((comment) => {
            return `<li>${comment.id}. ${comment.email}</li>`;
        })
        .join("");
});

/* 
    Công việc phụ thuộc nhau: Kết quả của công việc trước là đầu vào của công việc sau:
    - 1. Lấy danh sách thành phố -> lấy ra thành phố Hà Nội
    - 2. Lấy ra danh sách quận huyện của Hà Nội -> lấy ra Ba đình
    - 3. Lấy ra danh sách phường xã của Ba Đình
*/

/* Callback-Hell */

/**
 * Promise: Lời hứa: Quản lý công việc không biết kết quả ngay!
 * Có kết quả sẽ có 2 trạng thái Thành công / Thất bại
 *
 * Có 3 trạng thái: Pending | Fulfill | Rejected
 */

/* Bắt đầu lời hứa:
Anh hứa mua iphone 17 cho em!
*/
const promise = new Promise((resolve, reject) => {
    // resolve() -> Thành công!
    // reject() -> Thất bại!
    // resolve("Iphone 17 pro max") // Đã mua thành công
    reject("Không mua");
});

// nhận quà
promise.then(gift => {
    // Thành công 
    console.log(gift);
}).catch(error => {
    // Thất bại
    console.log(error);
})
