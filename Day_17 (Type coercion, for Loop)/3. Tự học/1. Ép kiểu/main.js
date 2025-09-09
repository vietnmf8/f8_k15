/* 
    Ép kiểu rõ ràng:
        - Kiểu số: Number(value)
        - Kiểu chuỗi: String(value)
        - Kiểu boolean: Boolean(value)

        - Kiểu Object: Object(value)
        - Kiểu Array: Array(value)
        - Kiểu hàm: Function(value)
        - null và undefined => không có
*/

/* 
    Ép kiểu ngầm: 2 + "3" => 23
*/

/* Ép kiểu chuỗi: */
String(123);
(123).toString(); // không dùng cho null hoặc undefined
`${123}`

// console.log(String(123));
// console.log(`${123}`);
// console.log(String(true));
// console.log(123);
// console.log(String(undefined));
// console.log(String(null));
// console.log(String(456));
// console.log(String("Xin chào"));
// console.log(String(["Red", "Green", "Blue"]));
// console.log((123).toString());
// console.log(123..toString());

// let num = 123;
// console.log(num.toString());

// console.log({}.toString); // lỗi

/* Ép kiểu sang số */
// console.log(Number("456")); // 456
// console.log(Number(true)); // 1
// console.log(Number(null)); // 0

// console.log(+"456");
// console.log(+true);
// console.log(+null);
// console.log(+"abc"); // NaN

let studentName = "nguyen minh viet"
console.log(studentName)









