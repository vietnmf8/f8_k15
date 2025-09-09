// /* Toán tử !:NOT -> phủ định --> luôn trả về boolean */

// // Falsy: 0, null, undefined, "", NaN, false,...
// // Truthy: Còn lại

// console.log(!true); // đảo ngược -> false;
// console.log(!!123); // ép kiểu sang boolean

// const person = {
//     "full-name": "Nguyen Minh Viet",
//     age: 19,
// };

// const something = "Nguyen Van A";
// console.log(person[something]); // Thuộc tính động
// console.log(person.age);

/**
 * Ép kiểu:
 */

/* Ép kiểu tường minh: string, number, boolean */
/* let input1 = 123;
let output1 = input1 + "" 

let input2 = true;
let output2 = input2 + "" 

let input3 = null;
let output3 = input3 + "" 

let input4 = {};
let output4 = input4 + ""  */

// Ép sang string:
// - value + ''
// - String(value) --> Khuyên dùng
// - value.toString --> Không áp dụng cho null, hoặc undefined
// - null, undefined: Nếu sử dụng "." hoặc "[]" để cố gắng truy cập tới property/method sẽ lỗi!

/* console.log(typeof input1); // number
console.log(typeof output1); // string

console.log(typeof input2); // boolean
console.log(typeof output2); // string

console.log(typeof input3); // object
console.log(typeof output3); // string

console.log(typeof input4); // object
console.log(typeof output4, output4); // string [object Object] */

// null.toString() --> Lỗi !

/* // Ép kiểu số:
// 1. Number(value)
// 2. +value
// 3. parseInt (Số nguyên), parseFloat (Số thực)

let input1 = "123";
let output1 = Number(input1); // 123a -> NaN

let input2 = "123"; 
let output2 = +input2; // 123a -> NaN

let input3 = "133.4a"; 
let output3 = parseInt(input3); // Lấy được số (chỉ lấy phần nguyên) và loại bỏ ký tự không hợp lệ (Số đứng đầu 133a).
// a123 -> NaN -> Xác định từng ký tự rồi chuyển thành số. Nếu bắt gặp được ký tự không chuyển được thành số -> NaN


let input4 = "144.5a"; 
let output4 = parseFloat(input4); // Tương tự parseInt chỉ khác là lấy cả phần thập phân

console.log(output1, `"Kiểu dữ liệu: ${typeof output1}`);
console.log(output2, `"Kiểu dữ liệu: ${typeof output2}`);
console.log(output3, `"Kiểu dữ liệu: ${typeof output3}`);
console.log(output4, `"Kiểu dữ liệu: ${typeof output4}`);


let year = +prompt("Nhập năm sinh: ") // Ép kiểu sang số
let age = 2025 / year

if (!isNaN(year) && year !== 0) {
    console.log("Tuổi của bạn: ", age);
} else {
    console.log("Input không hợp lệ");
}


// Không đưa NaN vào biểu thức tính toán, vì kết quả của cả biểu thức luôn là NaN
// Tránh chia cho 0, kết quả trả về sẽ thành Infinite */

/* // Ép sang boolean:
// 1. Boolean(value)
// 2. !!value

console.log(Boolean(123)); // true
console.log(!!123); // true


// Kiểm tra NaN:
// 1. isNaN(value): Tự động ép đầu vào sang "number", đảm bảo dùng khi chắc chắn đầu vào là số
// 2. Number.isNaN(value): Không tự ép kiểu, dùng khi đầu vào là bất cứ dữ liệu gì
// 3. value !== value
// 4 !value && typeof value === "number" && value !== 0

let value = NaN;
if (value !== value) { // Giá trị của nó không bằng chính nó -> NaN
    console.log("Là NaN"); 
}


let input = "Nguyễn Văn A"; // Ép ngầm sang Number (-> NaN)  rồi kiểm tra.
console.log(isNaN(input)); // true
console.log(Number.isNaN(input)); // false


let a = +prompt("Enter value: ") // -> isNaN */

/* Ép kiểu ngầm: Tự động ép kiểu */

// Là hành vi Js tự động ép kiểu dữ liệu khi thực hiện biểu thức:
//      so sánh, số học, nối chuỗi

// So sánh ==
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(NaN == NaN); // false
console.log(null == undefined); // true
// Ép kiểu
console.log("123" == 123); // tự động ép "123" -> 123 rồi so sánh
console.log("123" == true); // false
// true -> Number là 1, false -> Number là 0

console.log("123" == { name: "John" });

// Phép cộng: Một trong 2 là chuỗi -> ép kiểu sang chuỗi
console.log(1 + "2"); // chuỗi
console.log(1 + true); // số
console.log(1 + null); // số
console.log(1 - "2"); // số


/* Symbol */
const value1 = Symbol("name");
const value2 = Symbol("name");

console.log(value1 === value1); //true
console.log(value1 === value2); //false

const value = Symbol("name");

const person = {
    [Symbol("name")]: "Nguyen Van A" // thuộc tính ẩn vì không truy cập được bên ngoài nữa --> [key khác chuỗi dùng dấu ngoặc vuông]
}

person[value] = 'Nguyen Minh Viet'
// person[value] !== person[Symbol("name")] --> Khác nhau


