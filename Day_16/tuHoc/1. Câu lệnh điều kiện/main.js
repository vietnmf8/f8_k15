/* Toán tử so sánh */
// So sánh == và != (Không nghiêm ngặt)
// Boolean: true/false

console.log(5 == "5"); // Ưu tiên ép kiểu về số, sau đó so sánh

// So sánh === và !== (Nghiêm ngặt) - So sánh giá trị và kiểu dữ liệu
console.log(5 === 5); // true
console.log(5 === "5"); // false

// Dấu >, <, >=, <=

/* if - else */

// let temperature = 20;
// if (temperature > 30) {
//     console.log("Hôm nay đẹp trời!");
// } else {
//     console.log("Nóng vl!");
// }

/* inline if else  */

// let temperature = 20;
// if (temperature > 30) console.log("Hôm nay đẹp trời!");
// else console.log("Nóng vl!");

/* Toán tử 3 ngôi */
// điều kiện ? nếu đúng : nếu sai
// let temperature = 20;
// let result = temperature > 20 ? "Trời nóng" : "Trời mát";
// console.log(result);

// function func1() {
//     console.log("Điều kiện đúng");
// }

// function func2() {
//     console.log("Điều kiện đúng");
// }

// 4 === 4 ? func1() : func2();

let month = 1;
month === 1 ? console.log("Tháng 1") : month === 2 ? console.log("Tháng 2") : console.log("Tháng không hợp lệ!");;
