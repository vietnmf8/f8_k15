let isDragging = false;

const drag = document.querySelector(".drag");
const dropzone = document.querySelector(".dropzone");

// Toạ độ ban đầu
const coord = {
    x: 0,
    y: 0,
};

/* ==========================================================
 * Hàm tiện ích
 * ==========================================================*/

function setDragPosition(x, y, instant = true) {
    Object.assign(drag.style, {
        transition: instant ? "none" : "0.3s ease-in-out",
        translate: `${x}px ${y}px`,
    });
}


function checkInDropzone(x, y) {
    console.log("Kiểm tra xem trong vùng dropzone");
    const left = dropzone.offsetLeft;
    const right = left + dropzone.offsetWidth;
    const top = dropzone.offsetTop;
    const bottom = top + dropzone.offsetHeight;

    return x >= left && x <= right && y >= top && y <= bottom;
}

function getEvent(e) {
    return e.touches.length ? e.touches[0] : e;
}

function handleMouseDown(e) {
    // Kiểm tra sự kiện chuột hay cảm ứng
    const event = getEvent(e)

    isDragging = true; // Bật chế độ kéo

    // Lưu toạ độ khi nhấn chuột
    coord.x = event.clientX;
    coord.y = event.clientY;
}

function handleMouseUp(e) {

    // Kiểm tra sự kiện chuột hay cảm ứng
    const event = getEvent(e);

    isDragging = false; // Tắt chế độ kéo

    const inDropZone = checkInDropzone(event.clientX || lastTouch.x, event.clientY || lastTouch.y);

    if (inDropZone) {
    } else {
        // Trả về vị trí ban đầu
        setDragPosition(0, 0, false);
    }

    // Reset toạ độ ban đầu
    coord.x = 0;
    coord.y = 0;
}

let lastTouch = {
    x: 0,
    y: 0,
};

function handleMouseMove(e) {

     // Kiểm tra sự kiện chuột hay cảm ứng
    const event = e.touches?.length ? e.touches[0] : e;

    lastTouch.x = event.clientX;
    lastTouch.y = event.clientY;

    if (isDragging) {

        // Tinh khoảng cách di chuyển
        // quãng đường = vị trí mới - vị trí ban đầu
        const distanceX = event.clientX - coord.x;
        const distanceY = event.clientY - coord.y;

        // Áp dụng CSS để di chuyển phần tử
        // theo trỏ chuột
        // Object.assign(drag.style, {
        //     translate: `${distanceX}px ${distanceY}px`,
        // });
        setDragPosition(distanceX, distanceY);
    }
}

/* ==========================================================
 * Sự kiện
 * ==========================================================*/

// Nhấn xuống
drag.addEventListener("mousedown", handleMouseDown);
drag.addEventListener("touchstart", handleMouseDown);

// Nhả ra trong document
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchend", handleMouseUp);


// Di chuyển chuột trong document
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleMouseMove);


