// Bất kể giá trị nào đều trả về undefined
console.log(123); // 123
console.log(void 123); // undefined
console.log(void(123)); // undefined
console.log(void 1 + 1); // undefined + 1 -> NaN
console.log(void (1 + 1)); // undefined 

function sum(a, b) {
    console.log("Hàm được gọi!");
    return a + b
}


/* --> Vẫn muốn thực thi một hàm, nhưng không muốn nhận lại giá trị */
console.log(void sum(2, 3)); // biểu thức, hàm trong void vẫn được gọi


/* Vô hiệu hoá hành vi mặc định của thẻ a */
/* So sánh giá trị với undefined -> if (x !== void(0)) */

