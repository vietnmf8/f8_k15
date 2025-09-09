/* Đồng bộ */
// Block: Công việc chạy xong -> công việc 2 chạy xong -> công việc 3...
console.log(1);
console.log(2);
console.log(3);

/* Bất đồng bộ */
// Non Blocking -> Không block những thao tác mất thời gian
console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

/*
 Những gì async (chạy bất đồng bộ):
    - timers: setTimeout, setInterval;
    - network: XMLHttpRequest, fetch
    - DOM events
    - Promise
    - ...
*/


/* 
    Callstack - Cấu trúc dữ liệu dạng ngăn xếp:
        - Thường mô tả theo chiều dọc --> Giống như chồng đĩa
            + đĩa 3
            + đĩa 2
            + đĩa 1

    Last In - First Out -> đĩa 3 vào cuối, nhưng dùng thì lấy ra đầu tiên


    Queues - > Cấu trúc dữ liệu dạng xếp hàng First In -> First Out
    - Giống như đi lấy vé xem concert -> đến trước lấy trước
*/
