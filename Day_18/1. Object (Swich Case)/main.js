// const day = 2; // 2 - 8

/* Sử dụng switch - case */
// switch (day) {
//     case 2:
//         console.log("Thứ hai");
//         break;
//     case 3:
//         console.log("Thứ ba");
//         break;
//     case 4:
//         console.log("Thứ tư");
//         break;
//     default:
//         console.log("Ngày không hợp lệ!");
// }

/* Sử dụng Object:
    - Biết cách tạo ra Object
    - Biết cách thêm một phương thức vào Object
        + Phương thức: Là một thuộc tính (property) có giá trị (value) là một hàm (function) => gọi là phương thức, thực hiện hành động
    - Biết cách gọi 1 hàm
*/
const day = 2; // 2 - 8
const object = {
    // key là 2 | value là 1 function
    2: () => {
        console.log("Thứ 2");
    },

    3: () => {
        console.log("Thứ 3");
    },

    4: () => {
        console.log("Thứ 4");
    },
};

if (!object[day]) {
    object[day]();
} else {
    console.log("ngày không hợp lệ!");
}

function a() {
    return {
        b: () => {
            return {
                c: () => {
                    console.log("TEST");
                },
            };
        },
    };
}



