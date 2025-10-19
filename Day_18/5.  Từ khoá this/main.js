/* 
- Từ khoá this -> giữ tham chiếu trên một object khác
- Tồn tại bên trong context:
    + Nếu trong FEC có từ khoá this, thì từ khoá này có thể trỏ về đâu đó?
    + Nếu trong GEC có từ khoá this, thì từ khoá này cũng có thể trỏ về đâu đó
    + Context bị xoá thì this không tồn tại bên trong context đó nữa
*/

/**
 * "this" keyword - Từ khoá "this":
 *  - Mỗi context sẽ có một đối tượng, "this" [tham chiếu] tới đối tượng của context đó.
 *
 * Đối tượng toàn cục:
 * - Trình duyệt: window
 * - NodeJS     : global
 *
 * Global Execution Context => đối tượng window
 * => "this" tại GEC chính là tham chiếu window
 *
 *
 * 1. "this" không nằm trong bất cứ hàm nào => trỏ về window
 * 2. "this" nằm trong một hàm, và gọi hàm theo cách thông thường => trỏ về window. VD: run()
 * 3. "this" nằm trong một hàm, gọi hàm đó qua một object => trỏ về chính object gọi qua hàm đó. VD: obj.run()
 * 4. Arrow function không có "this", nó sẽ "mượn" this từ context cha (context chỉ có FEC hoặc GEC). (context hàm arrow được định nghĩa)
 * 
 * Cách xác định:
 * Chúng ta xét xem có phải là arrow function
 *  + Nếu phải: Xét xem context cha là gì?
 *  + nếu không phải: xét 3 trường hợp còn lại
 */

// console.log(this === window);

// function handle() {
//     console.log(this);
// }

// handle(); // this: window

// const chicken = {
//     name: "Gà con",
//     fly() {
//         console.log(this);
//     },
// };

// const chicken = {
//     name: "Gà con",
//     fly: () => { // FEC: khi này context cha là GEC => this: window
//         console.log(this);
//     },
// };

// chicken.fly(); // this: chicken

// let student = {
//     name: "Minh",
//     run() {
//         // FEC #2 => this: student
//         const chicken = {
//             name: "Gà con",
//             fly: () => {
//                 // FEC #1: khi này context cha là FEC #2 => this ở FEC #2 là gì thì FEC #1 là cái đó => this: student
//                 console.log(this);
//             },
//         };

//         chicken.fly()
//     },
// };

// student.run()

// let student = {
//     name: "Minh",
//     run() {
//         console.log(this);
//     },
// };

// // const run = student.run;
// // Hiểu đơn giản đây là cách gọi hàm thông thường
// // run(); // this: window vì biến gán riêng hàm đó vào một biến toàn cục

// const run = student.run;
// // student.run(); // this: student

// /* => Mặc dù hàm cùng một tham chiếu bên HEAP. Nhưng thay đổi cách gọi là kết quả sẽ khác */

// const student2 = {
//     name: "Student 2",
//     run: run,
// };

// student2.run() // this: student 2

// let student = {
//     name: "Minh",
//     run: () => {
//         console.log(this);
//     },
// };

// const student2 = {
//     name: "Student 2",
//     run: student.run,
// };

// student2.run() // window

/**
 * Ứng dụng
 */

const bookManager = {
    booksList: ["Book 1", "Book 2"],
    add(book) {
        // TODO: Thêm sách
        this.booksList[this.booksList.length] = book;
    },
    update(index, book) {
        // TODO: Cập nhật sách
        this.booksList[index] = book
    },
    show() {
        // TODO: Hiện thông tin danh sách
        console.log(this.booksList);
    },
    del() {
        // TODO: Xoá sách
    },
};

console.log(bookManager);
