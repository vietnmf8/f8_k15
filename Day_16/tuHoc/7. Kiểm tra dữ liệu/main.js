/* String */
let greeting = "Xin chào!";
console.log(typeof greeting === "string"); // true

// Kiểm tra trước khi chạy logic
if (typeof greeting === "string") {
    // logic
}

/* Number */
let value = 30;
// Kiểm tra kiểu của value là number
// Kiểm tra value có phải là NaN không?
// NaN -> kết quả phép toán không hợp lệ (VD: 100 - "abc" -> 100 - NaN -> NaN)
// typeof NaN -> number -> Gây nhầm lẫn⚠️
console.log(typeof NaN); // number
console.log(NaN === NaN); // false -> sử dụng isNaN()
console.log(isNaN(11)); // false -> 11 không phải NaN
console.log(typeof value === "number" && !isNaN(value)); // true

if (typeof value === "number" && !isNaN(value)) {
    console.log("Số hợp lệ");
} else {
    console.log("Số không hợp lệ");
}

/* Null */
console.log(typeof null); //object -> so sánh trực tiếp với null
console.log(null === null); // true

/* Object */
// Vì typeof null -> object, typeof array -> object
// Kiểm tra cần loại trừ null và array
let person = {
    name: "John",
    age: 30,
};

console.log(
    typeof person === "object" && person !== null && !Array.isArray(person)
);

if (typeof person === "object" && person !== null && !Array.isArray(person)) {
    console.log("Là object");
} else {
    console.log("không phải object");
}

/* Array */
const colors = ["Red", "blue"];
// Cách 1:
console.log(Array.isArray(colors)); // true
// Cách 2:
console.log(colors instanceof Array); // true

/* Function */
const greet = () => {
    return "Hello World"
}

console.log(typeof greet === 'function'); // true