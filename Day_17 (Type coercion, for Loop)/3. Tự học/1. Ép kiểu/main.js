/* 
    Ép kiểu rõ ràng:
        - Kiểu số: Number(value)
        - Kiểu chuỗi: String(value)
        - Kiểu boolean: Boolean(value)

        - Kiểu Object: Object(value)
        - Kiểu Array: Array(value)
        - Kiểu hàm: Function(value)
        - null và undefined => không có
*/

/* 
    Ép kiểu ngầm: 2 + "3" => 23
*/

/* Ép kiểu chuỗi: */
String(123);
(123).toString(); // không dùng cho null hoặc undefined
`${123}`;

// console.log(String(123));
// console.log(`${123}`);
// console.log(String(true));
// console.log(123);
// console.log(String(undefined));
// console.log(String(null));
// console.log(String(456));
// console.log(String("Xin chào"));
// console.log(String(["Red", "Green", "Blue"]));
// console.log((123).toString());
// console.log(123..toString());

// let num = 123;
// console.log(num.toString());

// console.log({}.toString); // lỗi

/* Ép kiểu sang số */
// console.log(Number("456")); // 456
// console.log(Number(true)); // 1
// console.log(Number(null)); // 0

// console.log(+"456");
// console.log(+true);
// console.log(+null);
// console.log(+"abc"); // NaN

/* parseInt: Chuyển đổi sang số nguyên -> làm tròn xuống: VD: 123.999 -> 123
 & parseFloat: Chuyển đổi sang số thực 
 
    - Khi đầu vào là chuỗi
        + parseInt() và parseFloat() sẽ phân tích chuỗi đó => tìm số đầu tiên và chuyển sang Number. Nếu khong tìm thấy => trả ra NaN
    - Nếu đầu vào không phải chuỗi => chuyển thành chuỗi
        ... thực hiện giống bước trên
 */

console.log(parseInt("123a1")); // 123);

/* Ép kiểu sang boolean */
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false

// dùng toán tử NOT -> tự động ép về kiểu boolean
!!0; // false
!!1; // true

// Có 6 giá trị sau đây ép kiểu sang boolean:
// false, 0, '', null, undefined, NaN -> false
// Còn lại thì đều ra ->  true

// let studentName = "nguyen minh viet"
// console.log(studentName)

/* 

- Nếu cùng kiểu dữ liệu:
    + Nếu cả 2 là undefined hoặc null => true
    + Nếu là số:
        + Nếu 1 trong 2 là NaN -> false
        + Nếu cả 2 số giống hệt nhau -> true
    + Nếu là chuỗi:
        + so sánh từng ký tự (giống nhau 100%)
    + Nếu là boolean => true nếu cả2 cùng true hoặc cùng false


So sánh ==
- Nếu x = null, y = undefined hoặc ngược lại => true
- Nếu 1 trong 2 là chuỗi và cái còn lại là số
    => chuyển đổi chuỗi thành số rồi so sánh
- Nếu 1 trong 2 là boolean
    => chuyển đổi boolean rồi so sánh
- Nếu 1 trong 2 là đối tượng và cái kia là chuỗi hoặc số
    => chuyển đối tượng thành giá trị nguyên thuỷ rồi so sánh
-> Nếu không thoả mãn các trường hợp trên => false
*/

/* 
Quy tắc ép kiểu ngầm 
    - Toán tử (+):
        + B1: Xem xét giá trị của biểu thức bên trái và bên phải của toán tử
        + B2: Chuyển đổi các giá trị này về nguyên thuỷ
            + Primitive: string, number, bigint, symbol, null, undefined
        + B3: Nếu 1 trong 2 giá trị là chuỗi => Thực hiện nối chuỗi
        Nếu không, chuyển đổi cả hai giá trị sang số, và thực hiện phép cộng
    VD: '5' + 2 = 52 | 5 + 2 = 7

    - Toán tử (-): Luôn thực hiện phép trừ số học
        + Luôn chuyển đổi 2 toán hạng thành số, sang kiểu number để thực hiện phép trừ số học. VD: 10 - '5' = 5
*/


/* Hàm prompt: Giống với alert là bật ra một thông báo. Khác ở chỗ có thể khai thác dữ liệu người dùng 
- Ô prompt: Lấy dữ liệu từ người dùng nhập vào => đó là string
*/
// Chuyển sang số
let numberA = +prompt('Nhập số A...');
let numberB = +prompt('Nhập số B...');

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value)
}1

if (isNumber(numberA) && isNumber(numberB)) {
    console.log(`Tổng A và B là: ${numberA + numberB}`);
} else {
    console.log('Số không hợp lệ!');
}
