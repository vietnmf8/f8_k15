/* Instanceof: kiểm tra xem một object có nằm trong prototype chain (chuỗi prototype) */
// const colors = ["red"];
// // Mảng bản chất là sinh ra từ hàm tạo của Array
// console.log(colors instanceof Array);
// console.log(colors);

// function Cat(name) {
//     this.name
// }

// function Mouse(name) {
//     this.name
// }

// const tom = new Cat("Tom");
// console.log(tom instanceof Cat); // true
// console.log(tom instanceof Mouse); // false
// console.log(tom instanceof Object); // true: Object.prototype là ông tổ -> cuối chuỗi prototype
// // Con -> Cha -> Ông -> ... -> Ông tổ

// console.log(tom.__proto__ === Cat.prototype) //  true
// console.log(tom.__proto__ === Object.prototype) //  false
// console.log(tom.__proto__.__proto__ === Object.prototype) //  true

// /* Lấy ra chính hàm tạo Cat thông qua thuộc tính constructor */
// console.log(tom.constructor === Cat); // true
// console.log(tom.constructor === Object); // false

/* Nguyên lý hoạt động/ Bản chất của instanceof:
    - Lấy prototype của hàm tạo bên phải (Array) kiểm tra xem có nằm trong chuỗi prototype của object bên trái (colors) hay không?

    Tức là kiểm tra Array.prototype có nằm trong chuỗi kế thừa của colors hay không?
*/

/*   Phân biệt thuộc tính prototype và [[prototype]] trong Array
    - thuộc tính prototype: Đây là object mẫu mà mọi instance của Array sẽ kế thừa.
    - [[prototype]]:
    Array bản thân là một function constructor, và mọi function trong JS đều được tạo từ Function.
    Vì vậy Array.[[Prototype]] === Function.prototype.

    Tại sao trong Array.prototype lại có [[Prototype]]: Object. Vì lúc này Array.prototype là một object thường mà object được sinh ra từ Object.prototype
*/

const colors = ["red"];
console.log(colors instanceof Array);

// Array.prototype
console.log(colors.__proto__ === Array.prototype); // true

/* Tại sao lại true? vì ban đầu nó lấy Object.prototype rồi đem đi so sánh */
console.log(colors instanceof Object); // true

/* Kiểu nguyên thuỷ không có prototype
    - Tại đây không xảy ra AutoBoxing (Wrapper Object)

*/
console.log("abc" instanceof String); // false
console.log(new String("abc") instanceof String); // true

/* Ví dụ về không có thừa kế (null) */
const obj = Object.create(null);
obj.name = "John"
