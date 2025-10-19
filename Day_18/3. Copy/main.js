/**
 * Shallow Copy: Sao chép nông
 * Chỉ sao chép object mới ở cấp 1 thôi
 * Cấp 2 trở  đi vẫn là tham chiếu cũ
 */

/* 
    Callstack:
    - person1: #0x01
    - person2: #0x02

    Heap:
    #0x01: {
        name: "John",
        child: #0x04
    };

    #0x02: child: {
            name: "Child 1",
        },

    #0x03: {
        name: "John",
        child: #0x02
    };

    #0x04: {
    name: "Child 2",
    };
*/

// let person1 = {
//     name: "John",
//     child: {
//         name: "Child 1",
//     },
// };

// // let person2 = Object.assign({}.person1); -> sao chép nông
// let person2 = { ...person1 };

// person1.name = "Bob";
// // console.log(person2.name); // John
// // person1.child.name = "New Name";
// person1.child = {
//     // Đâu là object mới
//     name: "Child 2",
// };
// console.log(person2.child.name); // New Name: Vì tham chiếu này vẫn là tham chiếu cũ do copy nông (... => bê nguyên phần thân trong object) chỉ copy được ở cấp 1

/**
 * Deep Copy: Sao chép sâu
 */

let person1 = {
    name: "John",
    child: {
        name: "Child 1",
    },
};

// Bước 1: Chuyển object thành chuỗi JSON (JSON stringify)
// Bước 2: Chuyển ngược chuỗi đó thành object JS (JSON parse)
// => Object mới hoàn toàn
// let person2 = JSON.parse(JSON.stringify(person1));

// Cách 2:
let person2 = structuredClone(person1);

console.log(person1 === person2); // Cấp 1 -> khác nhau
console.log(person1.child === person2.child); // Cấp 2 -> khác nhau
