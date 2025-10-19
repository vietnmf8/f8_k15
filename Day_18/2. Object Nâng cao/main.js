const person = {
    name: "John",
};

person.name = "Bob"; // Gán lại thuộc tính chứ không phải  gán lại object nên không bị lỗi const

/**
 * Primitive (Nguyên thuỷ) & reference data (Tham chiếu) types:
 *  - Kiến thức: Callstack * Memory Heap
 *      + Kiểu nguyên thuỷ: Lưu trực tiếp ở Callstack theo dạng ngăn xếp
 *      + Kiểu tham chiếu : Lưu ở Memory Heap tham chiếu với địa chỉ VD: #0x01 sau đó địa chỉ này được lưu ở callstack
 */

/* Lưu kiểu nguyên thuỷ, giá trị vẫn sẽ được giữ nguyên */
// let a = 1;
// b = a;
// a = 2;

// console.log(a); // 2
// console.log(b); // 1

/* Gán lại kiểu tham chiếu, sẽ bị thay đổi tất cả vì cùng tham chiếu vào 1 địa chỉ như #0x01 */

// let c = {
//     name: "Nguyen Van A",
// };

// let d = c;
// c.name = "Nguyen Van B";

// console.log(c); // Nguyen Van B
// console.log(d); // Nguyen Van B
// // Bản chất vẫn là địa chỉ tham chiếu đó nên vẫn là object đó

// ? Vậy làm sao để copy một object độc lập hẳn ra
// /* Object.assign(target, ...source):
//         + Tham số đầu tiên: Nhận object mục tiêu
//         + Tham số thứ hai, ba...: Nhận các object nguồn
//     => Nhiệm vụ: Nó sẽ lấy toàn bộ thuộc tính có mặt ở các object nguồn, hợp nhất vào object mục tiêu => tạo ra object hoàn toàn mới, không bị tham chiếu
//         + Lưu ý: Hợp nhất các object từ NGUỒN -> MỤC TIÊU. Nếu trong mục tiêu có object nào bị trùng với nguồn -> có thể bị ghi đè, nếu không trùng thì vẫn giữ nguyên
// */
// let a = { name: "John" }; // #0x01
// // let b = Object.assign({}, a); // object mới

// /* Cách 2: trải ra */
// let b = { ...a }
// a.name = 'Bob'

// console.log(a.name);
// console.log(b.name);
// console.log(a === b); // false

// ? Làm sao để so sánh object với nhau thay vì so sánh tham chiếu (#0x01 ...)

let a = { name: "Bob" };
let b = { name: "Bob" };
console.log(a === b); // false | kỳ vọng là true vì giá trị giống nhau
/* Cách 1: Chuyển qua JSON
    - Chuyển object JS sang chuỗi: JSON.stringify(...)   
    - Chuyển chuỗi sang object JS: JSON.parse(...)  
    
    Nhược điểm: sẽ không so sánh được khi giá trị 2 object giống nhau nhưng thứ tự  thuộc tính khác nhau
    Chuyển qua lại stringify - parse: Hiệu năng không tốt khi object lớn
*/
a = JSON.stringify(a); 
b = JSON.stringify(b);
console.log(a === b);
