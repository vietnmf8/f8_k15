// 1. External
// 2. Internal

// Hello World
// console.log("Hello World");

/* ==========================================================
 * Variable - Biến
 * ==========================================================*/
// var, let, const

// Nguyên tắc đặt tên biến: camelCaseSomething
let userAge;    //-> Không có khởi tạo: mặc định là undefined
let userName;

// let a, b
// const a = 1, b = "Jack";


// let userAge = 18;
// let userName = "Trịnh Trần Phương Tuấn";
// 1. const userName: Phần khai báo (Declare)
// 2. = "Trịnh Trần Phương Tuấn": Phần khởi tạo
// console.log(userAge, userName);


// Gán lại (Sửa giá trị của biến) --> const
// userName = "Sơn Tùng M-TP";
// userAge = 25;

// console.log(userAge, userName);


/* ==========================================================
 * Toán tử (Operators)
- Toán tử số học: +, -, *, /, %, **
- Toán tử gán: =, +=, -=, *=,...
 * ==========================================================*/

/* Toán tử chia lấy dư */

// Ví dụ:
// console.log(4 % 10); // 4 chia 10 = 0 dư 4 

// Ứng dụng:
// - Chẵn / lẻ
// - Quy đổi giây -> phút (80 / 60 = 1 dư 20)\
// let totalSeconds = 80;
// let minutes = Math.floor(totalSeconds / 60);
// let remainingSeconds = totalSeconds % 60;
// console.log(`${minutes}p ${remainingSeconds}s`);


/* Toán tử gán */

// let a = 10;
// let b = 5;

// let total = a + b; // 10 + 5 = 15 -> Gán 15 cho biến total
// console.log(total);

/*  Toán tử gán kết hợp  */
// let number = 10;
// number = number + 5; // number += 5
// number = number - 5; // number -= 5
// number = number * 5; // number *= 5
// number = number / 5; // number /= 5

// number ++ // Tăng number lên 1 -> number += 1 --> 11
// ++ number  // Tăng number lên 1 -> number += 1 --> 11

// number -- // Giảm number xuống 1 -> number -= 1 --> 9
// -- number  // Giảm number xuống 1 -> number -= 1 --> 9

// console.log(number);


// Tiền tố: ++i --> Tiền tăng (Tăng trước)
/* 
    i++:
        const temp = i;
        i += 1;
        return temp;

    ++i:
        i += 1
        return i
*/

// Hậu tố: i++ --> Hậu tăng (Tăng sau)
// let num = 10;
// console.log(++num); // 11
// console.log(num++); // 10

// let num = 1;
// const result = num++ + ++num - --num // 2
// const result = --num * ++num - --num - --num + num--
// 0 * 1 - 0 - -1 + -1 = 0
// console.log(result);

/*  Toán tử +: Nối chuỗi khi ít nhất có 1 toán hạng là chuỗi  */

// let firstName = 'Nguyen Minh';
// let lastName = 'Viet';
// let age = 18;
// // Một trong 2 về là chuỗi -> Ép kiểu chuỗi với phần còn lại
// const fullName = firstName + ' ' + lastName + ' ' + age;
// console.log(fullName);

// console.log("10" + 2); // 102: Ép về chuỗi
// console.log("10" - 2); // 8: Ép về số
// console.log("10" * 2); // 20: Ép về số
// console.log("a" * 2); // Not of Number * 2 = Not of number

/*  Kiểu số  */
// let num = 10 // Số nguyên --> int
// let num = 10.5 // Số thực --> float

/* ==========================================================
 * Hàm: Function: Thực hiện hành động
 *==========================================================*/
// - Tái sử dụng (reuse) logic: Thay vì lặp lại cùng 1 logic nhiều lần, thì một hàm sẽ chứa logic đó, và ta có thể sử dụng hàm đó nhiều lần --> Tránh lặp code -> Dễ bảo trì.

//- Đặt tên hàm nên bắt đầu bằng động từ
//- Cú pháp:
/* 
    function name() {
        code...
    }
*/

/* Khai báo function */
// Khi khai báo hàm, phần thân hàm chưa được thực thi
// Code trong thân hàm được thực thi khi gọi hàm: Cú pháp: funcName()
// Hàm có thể gọi nhiều lần, mỗi lần gọi hàm thì code trong thân hàm sẽ được thực thi lại

// - Ở đây "message" là tham số (Param)

// function thongBao(message = "Jack", param2, param3) {
//     // Body - Thân hàm
//     console.log(message, param2, param3);
// }

/*  Gọi hàm  */
// // Nam : đối số của tham số message (Argument)

// // thongBao("Nam", "Value 2", "Value 3"); // Nam -> Đối số --> let message = Nam
// // thongBao("Việt"); // Nam -> Đối số --> let message = Nam
// // thongBao("Trường"); // Nam -> Đối số --> let message = Nam

// thongBao("Nam", "Value 2", "Value 3"); // Nam | Value 2 | Value 3
// thongBao("Việt");  // Việt | undefined | undefined
// thongBao("Trường");  // Trường | undefined | undefined
// thongBao() // Jack | undefined | undefined

/*  Giá  trị mặc định  */
// function moneyFormat(number, unit = "VND") {
//     console.log(number + unit);
// }

// moneyFormat(1000)

/*  Trả về giá trị và thoát hàm  */
function add(a, b) {
    return a + b;
    // Đã thoát hàm, các dòng code phía sau VÔ NGHĨA
}
const result = add(10, 20);

console.log(result);


