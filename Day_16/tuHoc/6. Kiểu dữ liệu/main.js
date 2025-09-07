/* 
    - string (Chuỗi)
    - number (số)
    - bigint (số lớn)
    - boolean (đúng/sai)
    - undefined (không xác định/chưa được khởi tạo)
    - null (chưa có gì, trống rỗng)
    - symbol (giá trị duy nhất)
    - object (đối tượng)
        + object
        + array
        + function

--> sử dụng typeof: kiểm tra kiểu dữ liệu của biến
*/

let userName = "Nguyen Minh Viet";
console.log(typeof userName); // string

let a = 1;
console.log(typeof a); // number

/* BigInt */
let largeNumber = BigInt("9007199254740991"); // Cách 1
let bigNumber = 9007199254740991n; // Cách 2
console.log(typeof largeNumber);

/* Boolean */
isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

/* Undefined */
// Khai báo biến mà chưa gán giá trị
let userLocation;
console.log(typeof userLocation); // undefined
console.log(typeof undefined); // undefined

/* Null */
// Một biến chưa có giá trị cụ thể, hoặc không tìm thấy dữ liệu
let searchResult = null; // ý nghĩa: Kết quả tìm kiếm ĐANG TRỐNG
console.log(typeof searchResult); // null -> object

// Trả về Null khi không tìm thấy trong bài toán tìm kiếm
// Reset/xoá giá trị biến
// Thể hiện tham số không bắt buộc


/* Symbol */
// Giá trị duy nhất
let uniqueId1 = Symbol("id");
let uniqueId2 = Symbol("id");

console.log(typeof uniqueId1); // symbol
console.log(typeof uniqueId2);
console.log(uniqueId1 === uniqueId2); // false

/* Object: key - value */
let user = {
    name: "Nguyễn Văn A",
    age: 30,
    address: "Hà Nội",
};

console.log(typeof user); // object
console.log(user.name); // Nguyễn Văn A

/**
 * Object đặc biệt
 */
/* Mảng (Array) */
let products = ["Iphone", "Samsung", "Google"];
console.log(typeof products); // object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

/* Function */
function calculateTax(price) {
    const taxRate = 0.1;
    return price * (1 + taxRate);
}

console.log(typeof calculateTax); // function


