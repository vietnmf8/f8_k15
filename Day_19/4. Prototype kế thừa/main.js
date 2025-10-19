/**Prototype:
 * Tính kế thừa:
 * - Tưởng tượng kế thừa gen di truyền
 *  + Con kế thừa từ cha
 *  + Cha mẹ kế thừa từ ông
 *  + Ông là kế thừa từ cụ ông
 *
 * => người đầu tiên (đứng đầu chuỗi, nó không kế thừa từ bất cứ thằng nào nữa): Ông tổ
 *
 * Dấu hiện nhận biết một object có kế thừa: là object đó ngoài có những thuộc tính/phương thức thì còn có [[Prototype]]...
 */

/* Ông tổ Object : Object.prototype
    - Hầu hết các object trong JS đều kế thừa Object.prototype
    - Ngoại trừ object được tạo bởi Object.create(null)


*/
// console.log(Object.prototype);

/* 
- Mỗi hàm (cứ làm hàm, hàm thông thường hay hàm tạo) sẽ được JS tự động tạo một thuộc tính tên là "prototype". (trừ arrow function)
- Object được tạo từ constructor (được tạo từ hàm tạo) sẽ kế thừa chính hàm tạo đó (constructors).prototype

*/
// function add(a, b) {}
// function Character() {}
// const run = () => {};

// console.log(add.prototype);
// console.log(Character.prototype);
// console.log(run.prototype); // undefined

// function Character(name) {
//     this.name = name;
// }
// console.log(Character.prototype);

// const tom = new Character("Tom"); // object tom sẽ kế thừa Character.prototype
// // [[Prototype]] sẽ lấy từ Character.prototype
// console.log(tom);

/* 
Hàm tạo Character.prototype sinh ra từ chính lý thuyết số 1 : Nghĩa là bản thân hàm Character tự động được JS tạo ra prototype. mà object được tạo ra từ hàm tạo đó lại kế thừa cái đấy
*/

/* truy cập vào object, nơi tom kế thừa */
// // Tom kế thừa prototype từ Character
// console.log(tom.__proto__ === Character.prototype); // true

// /* Đã kế thừa rồi thì sẽ lấy được các thuộc tính mà Character có */
// Character.prototype.value = "Tom value";
// console.log(tom.value);

/* 
    1. Các trường hợp kế thừa cơ bản:
        + object literal => kế thừa Object.prototype

    2. Object được tạo từ constructor (được tạo từ hàm tạo) sẽ kế thừa chính hàm tạo đó (constructors).prototype
*/

// const person = { name: "John" };
// console.log(person.__proto__ === Object.prototype); // true

/* Giải thích lý thuyết 1 chính là lý thuyết 2
    const person = { name: "Viet" };
    Thực chất là cách viết:
    const person = new Object({ name: "Viet" });
    => Bản chất object literal là được tạo từ hàm tạo tên là Object. Mà hàm tạo này sinh ra thuộc tính prototype.
    - Theo lý thuyết 2 thì person được kế thừa các thuộc tính từ (hàm tạo.prototype)Object.prototype (chính là object ông tổ)
*/

// const useAge = new Number(18);
// console.log(useAge.__proto__ === Number.prototype); // kế thừa từ Number.prototype
// console.log(useAge);

// const value = new Boolean(1);
// console.log(value.__proto__ === Boolean.prototype); // true

/* Bản thân Character.prototype lại là 1 object, mà hầu hết các object lại kế thừa từ Object.prototype */
// function Character(name) {}
// const tom = new Character("TOM");
// console.log(Character.prototype);

// /* Quá trình kế thừa
// object -> constructor.prototype (bản thân đây là một object) -> Object.prototype
// */

// const userAge = new Number(18);
// console.log(userAge.__proto__.__proto__ === Object.prototype);
// // Ông tổ Object.__proto__ = null. vì trong Object ông tổ có thuộc tính __proto__: null
// console.log(Object.prototype);
// console.log(String.prototype.__proto__);
// console.log(String.__proto__ === Function.prototype);

/* Các hàm tạo có sẵn: String, Number, Boolean, Object, Array, Function
    => typeof Function

    Ai sinh ra các hàm tạo này => Mọi function trong JS (String, Number, Boolean, Object, Array, Function) đều được tạo ra constructor Function => kế thừa từ Function.prototype
    String là một hàm , nó phải được tạo từ new Function

    Tức là nó được tạo ra bởi cái gì, thì nó sẽ kế thừa bởi cái đó
*/
// console.dir(String.__proto__ === Function.prototype);
// console.dir([].__proto__ === Array.prototype);
// console.dir([].__proto__.__proto__ === Object.prototype);
// console.dir({}.__proto__ === Object.prototype);
// console.dir(Function.__proto__ === Function.prototype); // Lú phết 🔥
// console.dir(Object.__proto__ === Function.prototype); // Lú phết 🔥

/* Ứng dụng hàm tạo */

const character = {
    attack(target) {
        target.hp -= this.atk;
    },
};

// Kế thừa trực tiếp => character sẽ xuống thẳng prototype luôn
const tom = Object.create(character);
tom.name = "Tom";
tom.hp = 100;
tom.atk = 20;
/* Ghi đè - Override */
// Tạo thêm thuộc tính / phương thức mà chỉ object tom sở hữu (Cấp 1)
tom.attack = () => {
    // Khi gọi hàm sẽ quét qua cấp 1 trước, nhận thấy có attack sẽ gọi attack => vì vậy attack ở prototype sẽ không được gọi, có thể bị ghi đè đấy, hãy cẩn thận
}

const jerry = Object.create(character);
jerry.name = "Jerry";
jerry.hp = 50;
jerry.atk = 10;

// console.log(tom.__proto__ === character); // true vì tom kế thừa từ character

// console.log(tom);
// console.log(jerry);

console.log(jerry);
tom.attack(jerry)
console.log(jerry);

/* Giả có 100 con nhân vật, thì hàm attack cũng chỉ tạo 1 lần, tối ưu bộ nhớ */
console.log(tom.attack === jerry.attack);


/* VD: Hầu hết mọi thứ được tạo ra bởi object */
//? Tại sao "a" là chuỗi mà lại .toUpperCase() được => rõ ràng là object có phương thức thức .toUpperCase()
/* 
    "a" -> new String("a") => kế thừa từ String.prototype
*/

console.log(new String("a").__proto__.toUpperCase()); // "" vì new String("a").__proto__ = String.prototype => String.prototype.toUpperCase() -> không phải giá trị "a" nữa rồi
console.log(new String("a").toUpperCase()); // A


/* Object rỗng */
{ } // => Không phải object rỗng vì vẫn kế từ từ Object.prototype
// Đây mới là object rỗng
console.log(Object.create(null)); // Không kế thừa từ gì cả

