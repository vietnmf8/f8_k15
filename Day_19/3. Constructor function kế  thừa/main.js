function Animal(name, age) {
    this.name = name;
    this.age = age;
}
/* CAT */
function Cat(name, age) {
    Animal.call(this, name, age);

    this.speak = () => {
        // gọi trực tiếp run ở tầng sâu nhất
        const sound = Animal.prototype.run.call(this)
        console.log(sound);
        console.log(`${this.name} kêu meo meo...`);
    };
}

// Thể hiện tính kế thùa
Animal.prototype.run = function () {
    return `running 2///`
};
/* 
Bài toán: prototype Chain:
Hiện tại: cat -> Cat prototype -> Object prototype
Giải pháp:
Ghi đè lại Cat.prototype => Object Kế thừa object
Cat prototype => kế thừa => Animal.prototype => Object
*/
// Tại đây Cat.prototype là object mới kế thùa Animal prototype
Cat.prototype = Object.create(Animal.prototype);
// Khôi phục lại constructor
Cat.prototype.constructor = Cat;

/* DOG */
function Dog(name, age) {
    Animal.call(this, name, age);

    this.speak = () => {
        console.log(`${this.name} kêu gâu gâu...`);
    };
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Cat;

const tom = new Cat("Tom", 1);
const nick = new Dog("Nick", 1);

tom.speak();
nick.speak();
tom.run();

console.log(tom);
