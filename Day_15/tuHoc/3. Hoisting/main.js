/* Hoisting: Đưa phần khai báo lên trên đầu phạm vi */

// - function: (Declaration function) - Truyền thống
// - var, let, const

// greeting();

// function greeting() {
//     console.log("Xin chào");
// }



console.log(greeting); // undefined
var greeting = 'Xin chào!';
// var greeting -> phần khai báo
// var 'Xin chào!' -> phần khởi tạo