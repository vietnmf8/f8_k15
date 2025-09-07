/* Truthy & Falsy */

/* False:

    - false
    - 0, -0
    - ""
    - null
    - undefined
    - NaN (Not a Number)
*/

function isTruthy(n) {
    //  return n ? true : false
    // return !!n;
    return Boolean(n); // Chuyển sang kiểu Boolean
}

/* Toán tử &&:
    - trả về giá trị "falsy" đầu tiên.
    - Nếu không có giá trị "falsy" -> trả về giá trị cuối cùng.
*/

false && true; // false
0 && 1; // 0
"" && null; // null
6 && 8; // 8

let obj = { key: "value" };

if (obj && typeof obj === "object") {
    console.log("Là Object");
} else {
    console.log("không phải obj");
}

/* 
    Toán tử ||:
        - trả về giá trị "true" đầu tiên.
        - Nếu không có giá trị "true" -> trả về giá trị cuối cùng.
*/

// let firstName = "";
// let lastName = "Nguyen Van A";

// Gọi hàm nhanh: Nếu có greeting thì chạy hàm, còn không thì không làm gì
// let greeting = "Xin chào";
// greeting && alert(greeting);

// let userName = "nguyen minh viet";
// let displayName = userName || "Guest";

// Ưu tiên
let firstName = "";
let lastName = "";
let email = "abc@gmail.com";
let displayName = firstName || lastName || email || "guest";

displayName && console.log(displayName);

/* 
    Toán tử Nullish (??):
        - trả về toán hạng BÊN PHẢI khi bên trái là null hoặc undefined
        - trả về luôn toán hạng BÊN TRÁI khi bên trái khác null hoặc undefined

*/

let tenNguoidung = null;
let macDinh = "Khách";

let tenHienThi = tenNguoiDung ?? macDinh;

// Dùng chung toán tử ?? và && hoặc || cần phải có () để tránh lỗi thứ tự ưu tiên

function validateAge(age) {
    const errorMessage = "Error: Age is null or undefined";
    const validAge = age ?? errorMessage;
    return validAge === errorMessage
        ? errorMessage
        : typeof validAge === "number" && !isNaN(validAge) && validAge >= 0;
}
// Sample usage
console.log(validateAge(25)); // true
console.log(validateAge(null)); // "Error: Age is null or undefined"
console.log(validateAge(-5)); // false

/**
 * Hàm xử lý các tác vụ như
 */

/* Đây là cmt cấp 2 */

// Đây là cmt cấp 3

/* Hàm định dạng tên */
function formatName(firstName, lastName) {
    return `${firstName ?? ""} ${lastName ?? ""}`;
}
