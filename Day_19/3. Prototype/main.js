/* 
Prototype: Nguyên mẫu
- Class-based
- Prototype-based (Kế thừa thông qua Prototype)
*/

const parent = {
    name: "Parent",
    address: "Ha Noi",
};

// String, Number, Boolean... => Function Constructor có sẵn (Nhận biết: Viết hoa chữ cái đầu)
/* Tạo ra tính kế thừa
    - Tạo ra con (child) bằng cách kế thừa từ cha (parent)
    - Object.create: Tạo mới object
    - Đầu vào parent: là object mới tạo ra kế thừa từ object parent
    - Object mới: chưa có thuộc tính gì cả, nhưng vẫn truy cập được các thuộc tính của object cha (vì kế thừa từ Prototype)

    Cách thức tìm kiếm của JS:
    ? Tại sao child.address = "Ha Noi"
    B1: Tìm kiếm các thuộc tính/phương thức có mặt trực tiếp trong object child
    B2: Khi không có, sẽ tìm ở Prototype, cứ tìm xuống các tầng dưới như vậy
*/
const child = Object.create(parent);
console.log(child.name);
console.log(child);

// ? Vậy từ object con, làm sao để lấy ra được object parent được nó kế thừa
/* Cách 1: Tiêu chuẩn */
console.log(Object.getPrototypeOf(child)); // Lấy ra được object parent mà object child được kế thừa
console.log(Object.getPrototypeOf(child) === parent); // true : cùng tham chiếu: Nghĩa là lấy được chính tham chiếu là object con đang kế thừa (parent)

/* Cách 2: Trick lỏ */
console.log(child.__proto__);

/* Cách kế thừa tự nhiên của ngôn ngữ:
    - Hàm tạo có sẵn:
        - String, Number, Boolean, Object, Array, Function
    - Symbol, BigInt (không dùng trong hàm tạo)
    - null, undefined: Không có hàm tương ứng

    - Khi viết hàm tạo không dùng arrow function
*/

/* Cách viết tường minh (literal) */
// const userName = "Nguyen Van A"; // String literal
// const userAge = 18; // Number literal
// const person = {
//     name: "John",
// }; // Object Literal

/* Cách viết kiểu hàm tạo (Wrapper object/ Boxing) (Object bọc lại giá trị nguyên thuỷ)
    Lưu ý: Dùng từ khoá new luôn trả ra đối tượng
*/
const userName = new String("Nguyen Van A"); // giá trị được truyền vào được lưu ở PrimitiveValue: "Nguyen Van A" trong object
console.log(userName);

// Lấy ra giá trị nguyên thuỷ
// get PrimitiveValue
console.log(userName.valueOf());

const userAge = new Number(18);
console.log(userAge);
console.log(userAge.valueOf());

/* Object literal ép sang chuỗi */
const person = { name: "John" };
console.log(String(person)); // [object Object]
console.log(String(userName)); // Mặc dù là object nhưng lấy giá trị nguyên thuỷ để ép
console.log(String(userAge)); // Mặc dù là object nhưng lấy giá trị nguyên thuỷ để ép

/* Bản chất của việc ép object sang chuỗi
    - Đầu tiên là nó phải truy cập vào giá trị valueOf() của object đó , sau đó ép sang chuỗi
    console.log(person.valueOf() + "")
    person.valueOf(): object
    userAge.valueOf(): 18
    userName.valueOf(): Nguyen Van A
*/

console.log(new Boolean(1).valueOf());

/* Với new Object, new Array thì không cần lắm vì nó cũng giống như cách viết literal đều là object */

/* Cách tạo ra phần tử trống
    const colors = []
    const colors = [,,,,,,,,,,,]
    const colors = [, , , "Red"]
*/
const colors = new Array(1, 2, 3);
const numbers = new Array(5); // Nếu trong new Array chỉ có 1 tham số (duy nhất tham số đó là kiểu NUMBER), sẽ tạo ra một mảng mới phần tử empty (trống) tương ứng với length

const texts = new Array("RED");
numbers[5] = "ABC";
console.log(colors);
console.log(numbers);
console.log(texts);

/* Function */
// const add = (a + b) => {return a + b}
// Các tham số đầu là tham số của Hàm
// Tham số cuối cùng là nằm trong thân hàm
const add = new Function("a", "b", "return a + b"); // trả ra hàm anonymous

/* new String = valueOf() rồi mới (ép kiểu) toString() */
const userAge1 = 18;
const userAge2 = new String(18);
console.log(userAge1 == userAge2); // true

/* Khi dùng hàm tạo không dùng cho arrow function */
