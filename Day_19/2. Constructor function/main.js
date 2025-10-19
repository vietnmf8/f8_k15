/**
 * Constructor function: (Bản thiết kế chung đối tượng)
 * VD: Tạo bản thiết kế mô tả đối tượng này có thuộc tính, phương thức này
 * - Và từ bản thiết kế này => tạo ra các đối tượng dựa trên bản thiết kế này => các đối tượng có cấu trúc như nhau
 * Hàm tạo/ Hàm xây dựng ĐỐI TƯỢNG (object)
 *
 * 
- Quy ước đặt tên: Viết hoa chữ cái đầu
- Cách thức tư duy để chuyển object thông thường sang hàm tạo

- "this" trong hàm tạo: trỏ đến đối tượng mới được tạo
*/
function Character(name, hp, atk, def) {
    // console.log(this); // từ khoá this trỏ về đối tượng mới vừa được tạo, lúc này this sẽ tham chiếu đến object với nhãn Character{}
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    /* Tại sao vẫn có thể arrow function được
        - Vì nó sẽ thừa kế lại this từ context cha, từ phạm vi mà nó được định nghĩa
        - Hàm arrow này được định nghĩa bên trong [constructor]
    */

    this.attack = (target) => {
        // this ở đây sẽ được thừa kế this bên ngoài, mà this bên ngoài được trỏ cho object mới là tom
        const damage = this.atk - target.def;
        // Trường hợp def > atk
        target.hp -= damage > 0 ? damage : 0;
    };
    this.isAlive = () => {
        return this.hp > 0;
    };
    this.run = function () {
        console.log(this); // object: tom thì tom.run()
    };
    this.run2 = () => {
        console.log(this); // object: tom thì tom.run()
    };
}
// Tạo ra object tom từ hàm tạo -> phải có từ new
// Từ khoá new: khi gọi tom = new Character -> vẫn sẽ tự gọi hàm bên trong. Nên trong trường hợp này -> viết new Character() hay new Character là như nhau
const tom = new Character("Tom", 100, 20, 0); // tạo object mới
const jerry = new Character("Jerry", 50, 10, 10); // tạo object mới

console.log(jerry);
tom.attack(jerry);
console.log(jerry);

/* Nhân vật TOM */
// const tom = {
//     // Thuộc tính đưa làm tham số của hàm Tạo

//     name: "Tom",
//     hp: 100,
//     atk: 20,

//     // Phương thức tự thêm vào bên trong hàm tạo
//     attack(target) {
//         target.hp -= this.atk;
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// };

/* Nhân vật JERRY */
// const jerry = {
//     name: "Jerry",
//     hp: 50,
//     atk: 10,
//     attack(target) {
//         target.hp -= this.atk;
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// };

/* 
    Tính chất của Object được tạo bởi hàm tạo:
    Giống object thông thường nhưng:
        - Khi chúng ta đưa thuộc tính/phương thức vào bản thiết kế thì đối tượng được tạo ra từ bản thiết kế sẽ có.
        - Nhưng khi đưa trực tiếp vào đối tượng đó thì chỉ có đối tượng đó có, đối tượng khác không bị ảnh hưởng.

*/

// tom.something = "something.."; // Chỉ thêm thuộc tính mới vào object tom
// const tom2 = tom;
// tom.name = "TOM X"; // Object này cứ là object là tham chiếu

// console.log(tom2);

const run = tom.run; // this: window
const run2 = tom.run2;
run2();
console.log(tom.run2()); // this: TOM
