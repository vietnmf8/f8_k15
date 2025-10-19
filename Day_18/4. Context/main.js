/**
 * Execution Context - Ngữ cảnh thực thi
 * Để thực thi code JS, cần có ngữ cảnh thực thi
 *
 * JavaScript Engine
 *  - Thực thi JS:
 *  - Có 2 thành phần chính:
 *      1. Call Stack (Nơi thực thi JS)
 *      2. Memory Heap (Lưu trữ Object)
 */

/* 
 Execution Context - Ngữ cảnh thực thi:
    3 vai trò chính:
        a. Lưu trữ và quản lý các biến, hàm
        b. Thực hiện hoisting
        c. Xác định từ khoá this

    1. Ngữ cảnh thực thi toàn cục
    (Global Execution Context - GEC)
    - Lưu trữ và quản lý các biến/hàm được khai báo không nằm bên trong bất cứ một hàm nào 
    - Được tạo ra duy nhất 1 GEC khi chạy. VD: như mở 1 tab mới trên trình duyệt
    - Được xoá bỏ khi tắt chương trình. VD như đóng tab trình duyệt

    2. Function Execution Context - FEC
    Ngữ cảnh thực thi hàm
    - Lưu trữ và quản lý các biến/hàm được khai báo nằm trong hàm (bao gồm tham số của hàm)
    - Được tạo ra khi gọi 1 hàm
    - Được xoá bỏ khi hàm kết thúc
    
    
    3. Eval Execution Context (EEC)
    Không khuyến nghị sử dụng bởi rủi ro về bảo mật và hiệu suất
*/
// GET
let userName = "Nguyen Van A";
const userAge = 18;
var address = "Ha Noi";

function add(a, b) {
    return a + b;
}

// FEC
const result1 = add(1, 2); // FEC #1
const result2 = add(2, 2); // FEC #2
const result3 = add(1, 3); // FEC #3
