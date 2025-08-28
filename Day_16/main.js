/* ==========================================================
 * Câu điều kiện
 * ==========================================================*/

/* 
    if (condition) {
        Nếu điều kiện đúng
    } else {
        Nếu điều kiện sai
    }
*/

// const a = 10;
// const b = 5;

// if (a > b) {
//     console.log("a > b");
// } else {
//     console.log("a <= b");
// }

// const age = 18;

// if (age >= 18) {
//     console.log("Được mua rượu");
// } else {
//     console.log("Chưa đủ tuổi để mua rượu");
// }

/* 
Toán tử so sánh
    - So sánh bằng:
        + Nghiêm ngặt (Strict): ===
        + Không nghiêm ngặt (Non Strict): ==
    - So sánh khác:
        >, >=, <, <=

--> Toán tử so sánh luôn trả về kiểu dữ liệu boolean: true / false
*/

// const a = 1;
// const b = 2;
// console.log(a < b); // true
// console.log(a > b); // false
// console.log(a === b); // false

// const a = "Nguyen Van A";
// const b = "Nguyen Van a";

// console.log(a === b); // false
// console.log(a !== b); // true --> So sánh kiểu hoa thường

// const trueResult = a === b;
// console.log(trueResult);

// if (a === b) {
//     // Điều kiện đúng
//     console.log("Đúng");
// } else {
//     // Điều kiện sai
//     console.log("Sai");
// }

/* 
===:
    - So sánh cả giá trị và kiểu dữ liệu
    - Không tự động chuyển đổi kiểu dữ liệu khi so sánh
==:
    - So sánh giá trị
    - Tự động chuyển đổi kiểu dữ liệu về CÙNG KIỂU sau đó mới so sánh
    - Cực hiếm dùng trong thực tế
*/

// // Vế trái: number | Vế phải: string
// console.log(1 === "1"); // false
// console.log(1 == "1"); // true

/* Nhiều điều kiện

    if (condition1) {
        // Nếu condition1 đúng
    } else if {
        // Nếu condition2 đúng 
    } else if {
        // Nếu condition3 đúng 
    } else if {
        // Nếu condition4 đúng 
    } else {
        // Nếu toàn bộ các condition trên sai
    }

    --> if...else: luôn chỉ có một nhánh đầu tiên điều kiện đúng được xử lý
*/

// const temp = 15;

// if (temp >= 30) {
//     console.log("Hôm nay trời nóng quá");
// } else if (temp >= 20 && temp < 30) {
//     console.log("Hôm nay trời mát!");
// } else if (temp < 20) {
//     console.log("Hôm nay lạnh quá!");
// }

// if (temp >= 30) {
//     console.log("Hôm nay trời nóng quá");
// } else if (temp >= 20) {
//     console.log("Hôm nay trời mát!");
// } else {
//     console.log("Hôm nay lạnh quá!");
// }

// if (temp >= 30) {
//     console.log("Hôm nay trời nóng quá");
// }

// if (temp >= 20) {
//     console.log("Hôm nay trời mát!");
// } else {
//     console.log("Hôm nay lạnh quá!");
// }

let n = 5; // Number
// 1. Nếu n chia hết cho 3 -> in ra "F"
// 2. Nếu n chia hết cho 5 -> in ra "8"
// 3. Nếu n chia hết cho cả 3 và 5 -> in ra "F8"

// Gợi ý:
// - % (kiểm tra chia hết),
// - dùng toán tử && kiểm tra điều kiện đồng thời

// if (n % 3 === 0 && n % 5 === 0) {
//     console.log("F8");
// } else if (n % 3 === 0) {
//     console.log("F");
// } else {
//     console.log("8");
// }

// function checkTemp(temp) {
//     // if (temp >= 30) {
//     //     return "Hôm nay trời nóng quá";
//     // }

//     // if (temp >= 20) {
//     //     return "Hôm nay trời mát quá!";
//     // }

//     // return "Hôm nay lạnh quá!";

//     // INLINE IF ELSE
//     if (temp >= 30) return "Hôm nay trời nóng quá";
//     if (temp >= 20) return "Hôm nay trời mát quá!";
//     return "Hôm nay lạnh quá!";
// }

// const result = checkTemp(25);
// console.log(result); // Hôm nay mát trời

/*  Toán tử 3 ngôi:

- Cú pháp:
    condition ? Nếu điều kiện đúng : Nếu điều kiện sai
*/

// const result = 2 === 2 ? "Đúng" : "Sai";
// console.log(result); // Đúng

// 1. Viết dễ hiểu trước
// 2. Viết ngắn gọn sau

/* ==========================================================
 * Switch - case
 * ==========================================================*/

// let value = "value-1"

// switch (value) {
//     case "value-1":
//         // Nếu value === "value-1" thì thực thi
//         break;
//     case "value-2":
//         // Nếu value === "value-2" thì thực thi
//         break;
//     case "value-3":
//         // Nếu value === "value-3" thì thực thi
//         break;
//     default:
//         // Sẽ thực thi nếu value không khớp bất cứ case nào.
// }

// let day = 2;
// switch (day) {
//     case 2:
//         console.log("Thứ 2");
//     // break;
//     case 3:
//         console.log("Thứ 3");
//         break;
//     case 4:
//         console.log("Thứ 4");
//         break;
//     case 5:
//         console.log("Thứ 5");
//         break;
//     case 6:
//         console.log("Thứ 6");
//         break;
//     default:
//         console.log("Ngày không hợp lệ");
// }
// Thứ 2, Thứ 3: Tại vì nguyên lý nếu đúng case đầu tiên, không có break thì sẽ ăn xuống case tiếp theo, có break thì dừng (không kể đúng sai)

// kỹ thuật fall through
// const month = 1;
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Quý 1");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Quý 2");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Quý 3");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log("Quý 4");
//         break;
//     default:
//         console.log("Tháng không hợp lệ");

// }

// let temp = 35;
// switch (true) {
//     case temp >= 30:
//         console.log("Hôm nay trời nóng quá");
//         break;
//     case temp >= 20:
//         console.log("Hôm nay trời mát quá");
//         break;
//     default:
//         console.log("Hôm nay trời lạnh quá");
// }

/* ==========================================================
 * Scope (Phạm vi)
 * ==========================================================*/

/* 
- Phạm vi toàn cục (Global Scope):
    + Khai báo biến/hàm không nằm trong bất cứ hàm, block nào khác.

- Phạm vi hàm (Function Scope):
    + Khai báo biến/hàm trong bất cứ hàm nào.

- Block scope (Phạm vi khối):
    + Khai báo biến (với let, const) trong bất cứ một block (cặp ngoặc nhọn - {}) nào
- Module scope (Phạm vi module)
*/

/* Phạm vi toàn cục */
let globalVar = "Global variable";
// Ưu điểm: Tiện dụng (Ở đâu cũng sử dụng được)
// Nhược điểm:
// - Dễ bị ghi đè
// - Khó quản lý -> Khó phát triển

/* Phạm vi hàm */
// Phạm vi bé hơn sẽ truy cập được biến hàm/hàm được khai báo ở phạm vi lớn hơn. Ngược lại thì KHÔNG ĐƯỢC
// function handle() {
//     let child = "Child variable";
//     console.log(child);

//     function childFunc() {
//         let child2 = "Child2 variable";
//     }
//     childFunc()
// }
// handle();

// Biến trùng tên nhau
// let fullName = "Nguyen Van A";

// function changeName() {
//     fullName = "Nguyen Van B";
//     console.log(fullName);
// }

// changeName()
// console.log(fullName);

// let fullName = "Nguyen Van A";

// function hamOng() {
//     // let fullName = "Nguyen Van B"

//     function hamCha() {
//         // let fullName = "Nguyen Van C"

//         function hamCon() {
//             let fullName = "Nguyen Van F"
//             console.log(fullName);
//         }

//         hamCon()
//     }

//     hamCha()
// }

// hamOng()

/* Phạm vi Block - Khối code - Khối lệnh */

// {
//     let fullName = "Nguyen Van A";
//     console.log(fullName);
// }

// Phân biệt var, let , const
// --> var: không có phạm vi block, trở thành phạm vi lớn hơn không phải block

// if (true) {
//     var fullName = "Nguyen Van A";

//     if (true) {
//         console.log(fullName);
//     }
// }

// console.log(fullName);

// function start() {
//     if (true) {
//         var fullName = "Nguyen Van A";
//         console.log(fullName);
//     }
// }

// start()

/* ==========================================================
 * Kiểu dữ liệu
 * ==========================================================*/
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. BigInt
// 7. Symbol
// 8. Object: Object, Function, Array, Date, Map, Set,...

// let address = "Ha Noi"; // String
// let age = 18; // Number
// let amount = 20.5 // Number

// /* Kiểm tra kiểu dữ liệu */
// console.log(typeof address);
// console.log(typeof age);
// console.log(typeof amount);

// console.log(typeof result); // undefined

// Kiểm tra một biến có tồn tại thì mới chạy
// if (typeof age === "number") {
//     console.log(age + 1);
// }

// Quy ước đặt biến boolean: is, can, should,...
// let isActive = true;
// console.log(typeof isActive); // boolean

// let bio;
// console.log(typeof bio); // undefined

// let intro = null;
// console.log(typeof intro); // object

// let total = BigInt(
//     "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
// ); // chuỗi | giá trị không vượt ngưỡng (Infinity)

// console.log(total); // BigInt

// let symbol1 = Symbol("name");
// let symbol2 = Symbol("name");
// console.log(symbol1 === symbol2); //false
// // Hai symbol tạo giống nhau nhưng không bằng nhau

//Object literal (Tường minh - Mô tả đối tượng trong cuộc sống)
const pet = {
    // key (khoá): value (giá trị),

    /* property (thuộc tính): value (giá trị), */
    // key1: value1,
    // key2: value2,
    // key3: value3,
    //...
    /* Mô tả */
    name: "Mih",
    age: 5,
    legs: 4,
    weight: 5,
    gender: "male",

    /* Hành động - method (phương thức): function */
    speak: function () {
        console.log("Meo meo");
    },
};

console.log(typeof null); // object

console.log(pet.age); // 5
pet.speak();
