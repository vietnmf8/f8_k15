const slideshow = document.querySelector(".slideshow");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const track = document.querySelector(".track");
// Chuyển thành mảng (Array.from)
const slides = Array.from(document.querySelectorAll(".slide-item"));



let currentIndex = 1;
setPosition(true);

let canControl = true; // Biến quyết định next/prev có hoạt động hay không


const originLength = slides.length; // 3

// Constants
const NEXT = 1;
const PREV = -1;

prev.addEventListener("click", () => {
     if (!canControl) return; // Thoát hàm nếu không được phép prev/next
    calNewIndex(PREV);

});

next.addEventListener("click", () => {
    if (!canControl) return; // Thoát hàm nếu không được phép prev/next
    calNewIndex(NEXT);
});

function calNewIndex(step) {
    currentIndex =  (currentIndex + step + slides.length) % slides.length;


    // Lắng nghe transition kết thúc
    track.ontransitionend = () => {

        // Nếu đang ở slide giả cuối cùng
        if (currentIndex > originLength) {
            console.log("Last");

            currentIndex = currentIndex - originLength;
            setPosition(true); // instant
        }

        // Nếu đang ở slide giả đầu tiên
        if (currentIndex === 0) {
            currentIndex = currentIndex + originLength;
            setPosition(true); // instant
        }

        // cho phép prev/next hoạt động trở lại
        canControl = true;
    }

    // if (currentIndex > originLength) {
    //         track.ontransitionend = () => {
    //         console.log("Last");

    //         currentIndex = currentIndex - originLength;
    //         setPosition(true); // instant
    //     }
    // }

    console.log(currentIndex, originLength);

    setPosition();
}

function setPosition(instant = false) {

    if (!instant) {
        // Vô hiệu hoá prev/next trong lúc đang chuyển slide
        canControl = false;
    }
    
    track.style.transition = instant ? "none" : "ease 0.5s";
    track.style.translate = `-${currentIndex * 100}%`;
}

// Slides: 3 [1 2 3] 1
// Index: 0 [1 2 3] 4

// element.cloneNode() sẽ clone nguyên phần tử
// element.cloneNode(true) sẽ clone cả phần tử và các con bên trong nó
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

slides.unshift(lastSlide);
slides.push(firstSlide);

track.append(firstSlide); // slide 1
track.prepend(lastSlide); // slide 3


console.log(slides);



// const timeoutId = setTimeout(() => {
//     console.log("DONE");
// }, 3000); // 3000ms = 3s

// clearTimeout(timeoutId);


// const timerId = setInterval(() => {
//     console.log(Math.random() * 1000);
// }, 3000);

// clearInterval(timerId);


let autoPlayId;

function enableAutoPlay() {
    autoPlayId =  setInterval(() => {
        calNewIndex(NEXT);
    }, 3000);
}

enableAutoPlay()


function stopAutoPlay() {
    clearInterval(autoPlayId);
}


slideshow.addEventListener("mouseenter", () => {
    stopAutoPlay();
})

slideshow.addEventListener("mouseleave", () => {
    enableAutoPlay();
})




