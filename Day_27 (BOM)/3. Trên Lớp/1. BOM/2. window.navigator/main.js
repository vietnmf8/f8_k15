/* Navigator: Một vài thông tin của máy
    -   clipboard            : Khi copy thì lưu vào clipboard
    Các phương thức clipboard: 
        + readText : Lấy data từ clipboard
        + writeText: Đưa data vào clipboard
    - geolocation
        + getCurrentPosition: Lấy vị trí địa lý hiện tại (dùng trong mấy bán quần áo hỏi địa chỉ để đưa ra đại lý gần nhất để đến mua)

    - userAgent: Khi truy cập trang web, trình duyệt tự đính userAgent đưa lên máy chủ. VD Shopee: Không làm responsive web, họ làm giao diện web riêng, mobile riêng vì giao diện 2 màn quá khác nhau. Họ sử dụng Adaptive Design (thích ứng dựa trên thiết bị) (Còn responsive là đáp ứng ngay dựa trên viewport)
    ? Vậy làm sao để trên đt hiểu được giao diện mobile, trên web hiểu được giao diện web. Lúc này backend sẽ dựa vào userAgent để xác định là đang hiển thị trên mobile hay web để trả về khối code tương ứng
*/

// // Điều kiện là phải copy thủ công trước
// setTimeout(() => {
//     navigator.clipboard.readText().then(data => console.log(data))
// }, 3000)
// // Quyết định copy đưa vào clipboard
// navigator.clipboard.writeText("ABC")

// /* Hack lỏ!! */
// const content = document.querySelector("#content");
// content.addEventListener("copy", (e) => {
//     e.preventDefault() // Vô hiệu hoá copy thủ công!

//     window.navigator.clipboard.writeText("echo 123\n")
// })

const video  = document.querySelector("#video");
const btn    = document.querySelector("#btn");
const img    = document.querySelector("#img");
let   canvas = document.createElement("canvas");

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    console.log(stream); // trả ra object chứa luồng stream
    video.srcObject = stream;  // Để nhận src dưới dạng object
    video.play();
});

btn.addEventListener("click", () => {
    canvas.width  = 1920;
    canvas.height = 1080;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let image   = canvas.toDataURL("image/jpeg");
        img.src = image;
});

console.log("123");      // hôm nay
console.log("12332323"); // hôm nay
