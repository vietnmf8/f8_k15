/**
 * Object.create()
 */

/* Cách cũ */
// function Character(name, hp, atk) {
//     this.name = name;
//     this.hp = hp;
//     this.atk = atk;
// }

// // Thêm phương thức vào trong prototype
// Character.prototype.attack = function (target) {
//     target.hp -= this.atk;
// };

// const tom = new Character("TOM", 100, 20);
// const jerry = new Character("JERRY", 80, 10);

// console.log(tom);

/* Cách mới */
const prototype = {
    attack(target) {
        target.hp -= this.atk;
    },
    getName() {
        return this.name
    }
};

// Tom
const tom = Object.create(prototype);
tom.name = "Tom";
tom.hp = 100;
tom.atk = 20;
// Tính ghi đè - Override
tom.getName = function () {
    return `Ghi đè ${this.name}`
}

console.log(tom.getName());

// Jerry
const jerry = Object.create(prototype);
jerry.name = "Jerry";
jerry.hp = 100;
jerry.atk = 20;

console.log(jerry.getName());

// console.log(tom.__proto__ === prototype); // kế thừa luôn


/* Khi nào dùng cách cũ, cách mới 
    - Cách mới: Đảm bảo được các đối tượng giống nhau prototype, nhưng lại có thể DỄ DÀNG khác nhau về thuộc tính và phương thức
    - Cách cũ: Vẫn đảm bảo các đối tượng giống nhau prototype, nhưng  thuộc tính  chung nhau chỉ khác nhau về giá trị
*/
