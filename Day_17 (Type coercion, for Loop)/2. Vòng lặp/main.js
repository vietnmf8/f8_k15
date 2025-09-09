/**
 * Vòng lặp - Loop:
 * - Dùng để thực thi một logic nhiều lần
 */

/*
 VD: In ra từ 1 đến 1000:
    - console.log(1);    
    - console.log(2);    
    - console.log(3);    
    - ...   
    --> Vòng lặp 
*/

/* For loop:
    - Biến đếm
    - Phạm vi (điều kiện)
    - Step (Bước nhảy)

*/
// // For thường
// for (let i = 0; i <= 10; i++) {
//     // Block code
//     console.log(i);
// }

// // For mảng
// const colors = ["red", "blue"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

/* Tìm số lớn nhất bé nhất trong mảng */
function max(numbers) {
    // let result = 0; // Lỗi trong mảng có số âm
    // let result = numbers[0] // Đặt luôn là phần tử đầu tiên, nhưng nếu là mảng rỗng -> result trả ra undefined -> định kiểu yếu

    let result = -Infinity; // Số nhỏ nhất, kể cả mảng rỗng -> typeof vẫn là number

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }

    return result;
}

/* Tìm số nhỏ nhất */
function min(numbers) {
    let result = Infinity;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < result) {
            result = numbers[i];
        }
    }
    return result;
}

console.log(min([-1, -2, -3])); // 3

/* Chuỗi hỗ trợ qua index, đánh chỉ mục từng ký tự */
let str = "Nguyen Minh Viet";
console.log(str.length);
console.log(str[str.length - 1]);

/* Đảo ngược chuỗi */
function reverse(str) {
    // let result = [];
    // for (let i = str.length - 1; i >= 0; i--) {
    //     result.push(str[i]);
    // }
    // return result.join("");
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverse("ABC")); // CBA
console.log(reverse("Hello")); // CBA
console.log(reverse("Nguyễn Minh Việt")); // CBA

/* Viết hoa chữ cái đầu */
console.log("abc".toUpperCase()); // ABC
console.log("ABC".toLowerCase()); // abc

// function toTitleCase(str) {
//     // Chuyển toàn bộ về chữ thường
//     str = str.toLowerCase();

//     // Khởi tạo biến tích luỹ
//     let result = "";

//     // Duyệt qua từng ký tự
//     for (i = 0; i <= str.length - 1; i++) {
//         // Nếu là ký tự đầu tiên (i = 0) hoặc ký tự trước đó là khoảng trắng (" ") thì viết HOA ký tự hiện tại  -> nối vào biến tích luỹ
//         if (i === 0 || str[i - 1] === " ") {
//             result += str[i].toUpperCase();
//         }
//         // Trường hợp không cần viết HOA, nối ký tự hiện tại vào biến tích luỹ
//         else {
//             result += str[i];
//         }
//     }

//     // Trả về biến tích luỹ
//     return result;
// }

function toTitleCase(str) {
    str = str.toLowerCase();
    let result = "";
    let prevChar = " "; // Đặt ký tự trước đó = " " để viết hoa ngay chữ cái đầu tiên

    for (let char of str) {
        if (prevChar === " ") {
            result += char.toUpperCase();
        } else {
            result += char;
        }
        // gán biết prevChar bằng char
        prevChar = char;
    }

    return result;
}

// Kỳ vọng:
console.log(toTitleCase("nguyễn minh việt")); // Nguyễn Minh Việt
console.log(toTitleCase("NGUYỄN minh việt")); // Nguyễn Minh Việt
console.log(toTitleCase("NGUYỄN MINH việt")); // Nguyễn Minh Việt

/* 
    Vòng lặp vô hạn:
        => Treo trình duyệt: Xảy ra khi điều kiện không bao giờ sai
 */

let str1 = "nguyen van a";
let colors = ["Hẹ hẹ 1", "hẹ hẹ 2"];

// for (let i = 0; i <str1.length; i--) {
//     console.log("Hẹ");
// }

//for..in: object
//for..of: array/string

for (let char of str1) {
    // Lặp qua ký tự của str1 và lưu vào biến char
    console.log(char);
}

for (let color in colors) {
    console.log(color);
}

