/* 
    Object.prototype.valueOf()
    Object.prototype.toString()
*/
/* Cần giải thích được 2 trường hợp */
// const person = {
//     name: "John",
// };

// console.log(person + "");

// const number = new Number(999)
// console.log(number + "");

/* 
ValueOf() :
    - Trả về chính object mà ta gọi nó
toString() :
    - Thể hiện object đó dưới dạng chuỗi
*/

// const person = {
//     name: "John",
// };

// person.valueOf(); // trả về object person
// person.toString(); // object thể hiện dưới dang chuỗi: [object Object]

// const number = new Number(999);
// console.log(number.valueOf()); // 999
// console.log(number.toString()); // 999
// console.log(number);
/* Lý do
    - Ở trong number.prototype định nghĩa/có 2 phương thức toString() và valueOf() ghi đè lại ông tổ Object

    valueOf(): trả về giá trị NGUYÊN THUỶ mà object đang bao bọc
    toString():  trả về giá trị NGUYÊN THUỶ chuyển sang dạng chuỗi
*/

// Tương tự như Number, String, Boolean, BigInt, Symbol
// Array, function

// const colors = ["red", "green", "blue"];
// console.log(colors.valueOf()); // trả ra colors.
// // Vì Array.prototype định nghĩa là toString(), chứ không có valueOf, valueOf được lấy từ Object.prototype ông tổ
// console.log(colors.toString()); // Nối phần tử cách nhau bằng dấu "," không có khoảng trắng

// const sum = function (a, b) {
//     return a + b;
// };

// console.log(sum.valueOf()); // trả về chính function
// console.log(sum.toString()); // trả về chuỗi thể hiện khai báo function

/**
 * Vậy khi nào thì JS tự động gọi 2 phương thức trên và cách hoạt động của chúng như thế nào?
 */

// const person = {
//     name: "John",
// };

/* 
B1: Gọi person.valueOf() một cách tự động => nhận thấy không phải giá trị nguyên thuỷ -> gọi tiếp toString() -> trả về [object Object]
B2: Thực hiện nối chuỗi
*/
// console.log(person + "Abc"); // [object Object]ABC

// const number = new Number(999);
// console.log(number + "Abc"); // 999

/* 
    Khi ta đưa một object vào trong biểu thức (chứa toán tử)
    B1: JS sẽ tự động gọi phương thức valueOf() trên đối tượng number => và nhận về giá trị là kiểu nguyên thuỷ (number = 999)
    B2: Cộng với chuỗi "Abc" => ép kiểu thành chuỗi và nối chuỗi
*/

/* 
Cách thức hoạt động
*/

// const obj = {
//     valueOf() {
//         console.log("valueOf");
//         return {}; // không phải nguyên thuỷ => gọi tiếp toString()
//     },
//     toString() {
//         console.log("toString");
//         return "ABC"; // trả về nguyên thuỷ rồi, dừng lại ở đây thôi
//     },
// };
// console.log(obj + "abc"); // valueOf => toString => [object Object]abc
/* 
    B1: Gọi valueOf() => không trả về giá trị nguyên thuỷ => gọi tiếp toString() => không trả về giá trị nguyên thuỷ => undefinedabc => lúc này obj + "abc" sẽ lỗi vì obj không ép được sang string
*/

// console.log(obj == "abc"); // valueOf => toString => false
// console.log(obj === "abc"); // không cần gọi valueOf, toString => mà so sánh trực tiếp luôn, hoặc so sánh tham chiếu

// console.log(String(obj)); // Không dùng valueOf, mà chỉ dùng toString => toString => undefined , giá trị chuỗi chúng ta nhận lại là giá trị return trong toString
// console.log(`${obj}`); // Không dùng valueOf, mà chỉ dùng toString => toString => undefined , giá trị chuỗi chúng ta nhận lại là giá trị return trong toString
// console.log(obj + ""); // valueOf => return valueOf(nếu là giá trị nguyên thuỷ) => toString => return trong String

/* Ứng dung:
    Ví dụ đơn vị, quy đổi tiền phù hợp với từng quốc gia
    1$ = 24000 VND
*/

// function Money(value) {
//     this.value = value;
//     this.toVnd = function () {
//         return `${this.value * 24000}đ`;
//     };

//     // Ghi đè lại valueOf
//     this.valueOf = function () {
//         return this.value; // trả về giá trị nguyên thuỷ
//     }
// }

// const money = new Money(10);
// console.log(money.value); // 10
// console.log(money.toVnd()); // 240000đ

// // Mong muốn tính toán
// console.log(money + 20); // [object Object]20
/* 
Vì sao?
Vì money là object, khi thực hiện biểu thức có chứa toán tử +, JS sẽ gọi money.valueOf() => không phải nguyên thuỷ => gọi tiếp toString() => trả về [object Object] => nối chuỗi
*/

const obj = {
    valueOf() {
        console.log("valueOf");
        return {};
    },
    toString() {
        console.log("toString");
        return {};
    },
};

// console.log(obj + "ABC"); // Lỗi ở đây! vì .toString() đã thất bại trong việc ép sang String. Lúc này obj đang là obj cũng kế thừa prototype từ Object.prototype vậy nên câu hỏi đặt ra là có tiếp tục sử dụng valueOf -> toString nữa hay không? Câu trả lời là không! (nỗ lực ép 1 lần thôi)

/* Kiểm tra kiểu dữ liệu  */

function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

function isNumber(value) {
    return Object.prototype.toString.call(value) === "[object Number]";
}

// Có thể lỗi nếu như truyền null, undefined, [object Object]

// chọc trực tiếp vào Object.prototype.toString để kiểm tra. Trong JS người ta cung cấp ra một phương thức để gọi hàm => call
console.log(Object.prototype.toString.call(1)); // [object Number]
// Tham số bất kỳ, 7 kiểu dữ liệu => [object ...]

// Nhưng nếu là object được khởi tạo từ hàm tạo
const number = new Number(123) // mặc dù là object
console.log(Object.prototype.toString.call(number));  // không trả ra [object Object] mà trả ra tên hàm tạo [object Number]