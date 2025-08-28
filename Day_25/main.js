const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function() {
    modal.classList.add("open");
})

closeModal.addEventListener("click", function() {
    modal.classList.remove("open");
})

modal.addEventListener("click", function() {
    modal.classList.remove("open");
});

// Ngăn chặn sự kiện nổi bọt
modalContainer.addEventListener("click", function(e) {
    e.stopPropagation();
})
// Hoặc có thể dùng event.target -> vì event.target là phần tử được click, nơi phát ra sự kiện

// Keydown -> document
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        modal.classList.remove("open");
    }
})