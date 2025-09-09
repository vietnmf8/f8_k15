// /**
//  * Dispatch: Phát ra sự kiện
//  */

// /*
// - Trình duyệt luôn phát ra hành động. Việc addEventListener chỉ là lắng nghe thôi.
// - VD: Click vào thẻ <p> element: Trình duyệt sẽ dispatch (phát hành động) "click" event
// */

// const btn = document.querySelector("#btn");
// const input = document.querySelector("#input");

// /* Lắng nghe sự kiện Click */
// btn.addEventListener("click", () => {
//     console.log("Clicked!");
//     input.focus(); // Phát ra sự kiện focus
//     setTimeout(() => {
//         input.blur(); // Thoát focus
//     }, 3000);
// });

// btn.click(); // Phát ra sự kiện click

/**
 * BOM
 */

/* Window */
window.userName = "Nguyễn Minh Việt";
console.log(userName); // Trình duyệt có thuộc tính window
console.log(document === window.document); // true
console.log(window.location); // true

var userAge = 18; // Biến var nằm trong window
console.log(window.userAge);

// console.log(window['todo-input']); // lấy được thẻ input
console.log(window.todoInput); // lấy được thẻ input

// Lắng nghe sự kiện cuộn trên window, document
document.addEventListener("scroll", () => {
    console.log("hẹ hẹ");
});

// resize trên window
window.addEventListener("resize", () => {
    console.log(window.innerHeight); // Chiều cao của viewport (Zoom màn hình thì sẽ có thông số khác)
    console.log(window.innerWidth); // Chiều rộng của viewport
});

window.outerWidth; // độ phân giải gốc của máy

window.history; // Lịch sử đường link

window.location; // Lấy thông tin đường dẫn và chuyển hướng

// history.pushState() // Đổi địa chỉ nhưng không tải lại trang, vẫn push vào lịch sử
// history.replaceState() // Đổi địa chỉ nhưng không tải lại trang, không push vào lịch sử

// navigator.clipboard.writeText(text) // Ghi văn bản vào clipboard (copy).
// navigator.clipboard.readText() // Đọc văn bản từ clipboard (paste).

// userAgent // adaptive -> Mobile hay Desktop
// request camera

const video = document.querySelector("#video");
const imgTag = document.querySelector("#img");
const capture = document.querySelector("#capture");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
});

capture.addEventListener("click", () => {
    
     // lật ngang
    ctx.save(); // lưu trạng thái canvas
    ctx.translate(canvas.width, 0); // dịch sang phải bằng chiều rộng
    ctx.scale(-1, 1); // scale -1 để lật ngang
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore(); // khôi phục lại trạng thái ban đầu
    const image = canvas.toDataURL("image/jpeg");
    imgTag.src = image;
});

window.screen // thể hiện các chỉ số màn hình
// avaiHeight: Không gian khả dụng - taskbar
