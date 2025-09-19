/**
 * Vòng lặp: Thực hiện một khối lệnh lặp đi lặp lại dựa trên :
 * - SỐ LẦN ĐƯỢC BIẾT/ XÁC ĐỊNH TỪ TRƯỚC
 * - Có căn cứ xác định được số lần lặp (array.length - độ dài mảng)
 * 
 * Cú pháp:
 * for (khởi_tạo; phạm_vi(điều_kiện); cập nhật) {
    // Khối code lặp đi lặp lại
}
 */

let userNames = ["User-1", "User-2", "User-3"];

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}
/* Chạy ngược */
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

/* Step: 2 */
for (let i = 100; i >= 1; i -= 2) {
    console.log(i);
}


