/* Call:
    - Phương thực tương tự như bind() ở điểm chỉ ngữ cảnh 'this' tham chiếu về đối tượng nào
    - Khác ở điểm thay vì trả về hàm mới thì call sẽ gọi hàm ngay lập tức
*/

// function introduce(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.firstName}${punctuation}`);
// }

// const person1 = { firstName: "John" };
// const person2 = { firstName: "Viet" };
// const person3 = { firstName: "Name" };
/* Mượn hàm */
// const greet = introduce.bind(person);
// greet("Hello", "!");

/* Call: kết hợp bước bind và gọi hàm */
// introduce.call(person1, "Hello", "!");
// introduce.call(person2, "Hello", "!");
// introduce.call(person3, "Hello", "!");

// /* Kiểm tra dữ liệu object */
// function isObject(value) {
//     // Đây là cách gọi trực tiếp phương thức gốc của Object (không qua override).
//     return Object.prototype.toString.call(value) === "[object Object]";
// }
/* 
Mục đích JavaScript thiết kế toString nằm trong prototype là để các object thừa kế prototype có thể gọi được đến toString. mà trong hàm toString() phải sử dụng từ khoá this để trỏ đến obj

- Xét trong hàm isObject(value): value ở đây nhận là object, function, array... các giá trị để kiểm tra
- call(value)  tức là this sẽ trỏ đến value (object)
*/
const obj = { something: "value..." };
/* 
Đây là gọi phương thức toString trên chính đối tượng obj.
Nếu obj không tự định nghĩa toString, thì nó sẽ dùng Object.prototype.toString nhưng không có call/apply can thiệp, nên kết quả mặc định là: "[object Object]"

? Vây tại sao không gọi: Object.prototype.toString()
Lúc này hàm toString được gọi mà không có ngữ cảnh (this) gắn với một giá trị cụ thể. this = undefined -> .call(đối tượng) sẽ trỏ this đến đối tượng truyền vào
*/

/* Giải thích tại sao luôn là [object Object]
object.toString(): Vì toString() không có sẵn trong obj nên phải tìm đến prototype có phương thức là toString của Object.prototype.toString. Tại đây nếu gọi hàm sẽ không có this vì không phải đối tượng hợp lệ nữa rồi. lúc này cần đến call(để trỏ đến đối tượng)
*/
// console.log(obj.toString());

// console.log(isObject(123));
// console.log(isObject({ name: "Viet" }));
// console.log(isObject(null));
// console.log(isObject([1, 2, 3]));

// console.dir(Object.prototype);

// Object.prototype.demo = function () {
//   console.log(this === Object.prototype);
// };
// Object.prototype.demo(); // true

/**
 * Apply: Tương tự như call, điểm khác là apply nhận các đối số dưới dạng một mảng
 */

// function introduce(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.firstName}${punctuation}`);
// }

// const person = { firstName: "John" };
// const array = ["Hello, !"]
// // introduce.apply(person, ["Hello, !"]);
// introduce.apply(person, array);

/* ==========================================================
 * Bài toán: Sử dụng hàm với ngữ cảnh 'this' khác nhau và các đối số khác nhau
 * ==========================================================*/

// function introduce(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.firstName}${punctuation}`)
// }

// const person1 = { firstName: 'John' };
// const person2 = { firstName: 'JViet' };

// introduce.apply(person1, ['Hello', '!'])
// introduce.call(person2, 'hi', '@')

// const person = {
//     firstName: "John",
//     greet: function (greeting) {
//         console.log(this);
//     },
// };

// const greet = person.greet.bind(person);
// greet("Hello");

// function sum(a, b, c) {
//     return a + b + c;
// }

// const numbers = [1, 2, 3]
// sum.apply(null, numbers) // không cần truyền this
// // mục đích là phần tử trong mảng làm đối số của hàm

/* Tóm tắt:
- bind(): Không gọi hàm , copy ra hàm mới, bind sẵn các giá trị cho các tham số hàm
- call(): Gọi hàm ngay, truyền đối số cách nhau bằng dấu (,)
- apply(): gọi hàm ngay, truyền đối số dưới dạng một mảng

Cả 3 thằng:
- đều chỉ định 'this' sẽ tham chiếu về đối tượng cụ thể nào
- đều không sử dụng được với Arrow Function

Ứng dụng:
- Dễ dàng kiểm soát được từ khoá this đến đối tượng cụ thể
- Kỹ thuật mượn hàm/mượn hàm của đối tượng khác, thực thi trên những đối tượng không có hàm đó. Mượn hàm mấu chốt từ nhờ đặc tính của hàm bind()
*/
function Animal(name) {

}
console.dir(Animal);

const cat = new Animal()
console.log(cat);