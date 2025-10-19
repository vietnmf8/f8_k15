/* 
 Các phương thức này nằm ở trong Function Prototype
 Lý do: Từ khoá this bên trong hàm khó kiểm soát
 Chỉ cần thay đổi cách gọi hàm là từ khoá this trong thân hàm đã khác, dẫn đến lỗi

=> Nhu cầu: chỉ định từ khoá this trỏ đến 1 địa chỉ cụ thể để khi thay đổi cách gọi hàm thì khoá this vẫn trỏ đến địa chỉ đó
*/

/* VD lỗi */
// const person = {
//     firstName: "John",
//     greet(greeting) {
//         console.log(this.firstName);
//     },
// };

// person.greet('Hello') // OK
// // Nhưng lưu vào biến mới
// const greet = person.greet
// greet() // this trỏ đến window

//? Vậy làm sao để đảm bảo this luôn trỏ đến đối tượng person, mặc cho cách gọi hàm nào cũng được => bind

// bind tạo ra /sao chép một hàm mới (tham chiếu mới) từ hàm hiện tại (là hàm greet được tách ra từ object), từ khoá this sẽ được tham chiếu bởi đối tượng đã cho

// const greet = person.greet.bind(person)
// const person2 = {
//     firstName: 'Bob',
//     greet
// }

// person2.greet() // John -> this luôn trỏ về object person

// bind() vô dụng với arrow function vì nó không có "this" riêng mà mượn từ context bên ngoài nơi nó được định nghĩa

// const person = {
//     firstName: "John",
//     greet(greeting, param2, param3, param4) {
//         console.log(param2);
//         console.log(param3);
//         console.log(param4);
//         console.log(`${greeting} ${this.firstName}`);
//     },
// };

// const greet = person.greet.bind(person, "Xin chào", "Hello");
// const person2 = {
//     firstName: "Bob",
//     greet,
// };

/* 

bind(object, tham_số_1...)
khi gọi hàm(): Không truyền tham số => nhận tham_số_1
khi gọi hàm(đối số của tham_số_2): => đối số này sẽ là tham_số_2 trong hàm
*/

person2.greet("Xin chào 2", "Xin chào 3"); // Khi đã bind tham số  rồi, thì tại đây không cần truyền tham số nữa khi gọi hàm. Nếu cố tình truyền vào thì đó là tham số thứ hai của hàm, thứ ba ....

/* Kỹ thuật mượn hàm */
const person1 = {
    firstName: "John",
    greet(greeting) {
        console.log(`${greeting}, my name is ${this.firstName}`);
    },
};

const person2 = {
    firstName: "Bob",
};

// Mặc dù person2 không có phương thức greet, nhưng chúng ta có thể mượn được
// Tạo ra một hàm mới, hàm này có this trỏ đến person2
const greetBob = person1.greet.bind(person2)

//? Vậy tại sao Object.prototype.toString.call(value) lại hoạt động
