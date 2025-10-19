/**
 * Constructor function: (Bản thiết kế chung đối tượng)
 * VD: Tạo bản thiết kế mô tả đối tượng này có thuộc tính, phương thức này
 * - Và từ bản thiết kế này => tạo ra các đối tượng dựa trên bản thiết kế này => các đối tượng có cấu trúc như nhau
 * Hàm tạo/ Hàm xây dựng ĐỐI TƯỢNG (object)
 */

/*
Tại sao cần Constructor function?
    - Lập trình hướng đối tượng OOP (Tư duy lập trình viên)

    VD:
     Mô tả một sinh viên -> đối tượng Student
     Mô tả một sản phẩm -> đối tượng Product
     Mô tả một bình luận -> đối tượng Comment
     Mô tả nhân vật trong game -> đối tượng Character
     
     Làm trang web quản lý sách -> đối tượng chính Book
     Làm trang web quản lý bài blog -> đối tượng Post
*/

/* 
    VD: Game đánh theo lượt, có 2 nhân vật TOM & JERRY
    Các nhân vật đều có đặc điểm:
        - name: tên
        - hp  : máu
        - atk : chỉ số tấn công
*/

const tom = {
    name: "Tom",
    hp: 100,
    atk: 20,
    attack(target) {
        target.hp -= this.atk;
    },
    isAlive() {
        return this.hp > 0;
    },
};

const jerry = {
    name: "Jerry",
    hp: 50,
    atk: 10,
    attack(target) {
        target.hp -= this.atk;
    },
    isAlive() {
        return this.hp > 0;
    },
};

// console.log(jerry); // Trước khi đánh
// TODO: Thực hiện hành động: Tom đánh Jerry
// tom.attack(jerry);
// console.log(jerry); // Sau khi đánh

/* Dùng vòng lặp while (điều_kiện_cả 2 nhân vật_đều sống) */

let i = 0;
while (tom.isAlive() && jerry.isAlive()) {
    i++;

    console.log(`Lượt đánh ${i}`);
    console.log("Máu của Tom TRƯỚC khi bị đánh: ", tom.hp);
    // Cho jerry đánh Trước
    // ? Thế nhỡ may jerry đánh chí mạng tom chết luôn thì sao -> không chạy xuống dòng dưới nữa
    jerry.attack(tom);
    console.log("Máu của Tom SAU khi bị đánh: ", tom.hp);

    // // Kiểm tra cả 2 nhân vật cùng sống
    // if (tom.hp > 0 && jerry.hp > 0) {
    //     tom.attack(jerry);
    // }

    // Hoặc kiểm tra con bị đánh trước
    if (!tom.isAlive()) {
        break; // Dừng lại luôn và không cho đánh lại jerry
    }

    console.log("Máu của Jerry TRƯỚC khi bị đánh: ", jerry.hp);
    tom.attack(jerry);
    console.log("Máu của Jerry SAU khi bị đánh: ", jerry.hp);
}

/* Kiểm tra người thắng */
if (tom.hp > 0) {
    console.log("TOM win!");
} else {
    console.log("Jerry win!");
}
