// Dom Events
/* Click */
const h1 = document.querySelector("h1");

// Sử dụng phương thức "on + tên sự kiện" để lắng nghe sự kiện
h1.onclick = function (e) {
    console.log(e);
    console.log("Click me");
    // Thực hiện logic
    console.log(this); // this chính là thẻ h1
}
// h1.onclick()

// Sử dụng phương thức addEventListener để lắng nghe sự kiện
h1.addEventListener("click", function (e) { 
    console.log(e);
    console.log("Click me - addEventListener");
    // Thực hiện logic
});

// removeEventListener: Xóa sự kiện đã lắng nghe
// function viecCanLam(e) {
//     console.log(e);
//     console.log("Click me - addEventListener");
//     // Thực hiện logic
// }
// h1.addEventListener("click", viecCanLam);
// // h1.removeEventListener("click", viecCanLam);

/* Cuộn */

const goToTop = document.querySelector(".go-to-top");

document.addEventListener("scroll", function (e) { 
    // window.scrollY >= 200 ? goToTop.removeAttribute("hidden") : goToTop.setAttribute("hidden", "");
    // window.scrollY >= 200 ? goToTop.style.display = "block" : goToTop.style.display = "none";
    // window.scrollY >= 200 ? goToTop.hidden = false : goToTop.hidden = true;
    // goToTop.hidden = window.scrollY < 200
    // Thực hiện logic

    // Thêm class show khi cuộn chuột >= 200px
    goToTop.classList.toggle("show", window.scrollY >= 200);

});

window.scrollY; // Lấy vị trí hiện tại đang cuộn theo trục Y (Khoảng cách từ trên đỉnh trình duyệt đến vị trí hiện tại)

goToTop.addEventListener("click", function (e) { 
    // Cuộn chuột về đầu trang
    // window.scrollTo(0, 0); // Cách 1
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth" // Tính năng cuộn mượt
    // });

    window.scroll({
        top: 0,
        behavior: "smooth" // Tính năng cuộn mượt
    })
})


const form = document.querySelector(".form");
form.addEventListener("submit", function (e) { 
    // Ngăn chặn sự kiện mặc định
    e.preventDefault(); // Chặn sự kiện mặc định của thẻ a (liên kết)
    console.log(Math.random());

})


/* ContextMenu - Chuột phải */

const contextMenu = document.querySelector(".context-menu");

// Bắt sự kiện chuột phải trên toàn bộ trang
document.addEventListener("contextmenu", function (e) { 
    e.preventDefault(); // Chặn sự kiện mặc định của chuột phải
    console.log(e);

    // // Lấy vị trí chuột
    console.log(e.clientX, e.clientY); // Tọa độ tính từ trên đỉnh trình duyệt

    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.left = `${e.clientX}px`;

    contextMenu.classList.add("show");
})

// Ẩn contextMenu khi click chuột trái
document.addEventListener("click", function (e) {    
    contextMenu.classList.remove("show");
    // Sự kiện nổi bọt (Event Bubbling)
});

// Chặn nổi bọt
contextMenu.addEventListener("click", function (e) {    
    e.stopPropagation();
});






