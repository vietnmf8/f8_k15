/**
 * 1. CRUD: 4 thao tác dữ liệu cơ bản
 * - C: Create (Tạo)
 * - R: Read (Đọc/lấy)
 * - U: Update (Cập nhật/Sửa)
 * - D: Delete (Xoá)
 *
 * 2. API - Application Programming Interface: Quy tắc/Phương thức để các ứng dụng lập trình có thể nhìn thấy/giao tiếp với nhau.
 * + Application Programming: Ứng dụng lập trình
 * + Interface: Phương thức để ứng dụng khác nhìn thấy/giao tiếp
 *
 * - Các ngữ cảnh sử dụng API:
 *  2.1. Frontend giao tiếp với Backend
 *  + Frontend (Browser)  ----------------->  Database(Backend)
 *
 * ? Chúng ta thấy quy tắc/phương thức gì ở API sau:
 * API: https://jsonplaceholder.typicode.com/posts
 * - Sử dụng giao thức HTTP
 * - Trả về JSON
 * - Gọi lên với phương thức GET (POST, PUT, PATCH...)
 * - Trả về JSON (XML, TEXT...)
 *
 * 2.2. Giữa các ứng dụng Backend
 * + Shopee Backend  ----------------->  GHTK Backend
 *
 * 3. Giữa các đoạn code
 * Your code!                           Library (React....)
 */

/**
 * REST API
 * Xác định hành đồng (CRUD) dựa trên phương thức HTTP Method:
 * - GET: Lấy dữ liệu
 * - POST: Tạo mới
 * - PUT: Cập nhật toàn bộ dữ liệu của 1 tài nguyên cụ thể
 * - PATCH: Cập nhật một phần dữ liệu của 1 tài nguyên cụ thể
 * - DELETE: Xoá tài nguyên
 * Tên tài nguyên dùng danh từ số nguyên (posts, albums, photos..)
 * Pathname (đường dẫn trên URL) cấu trúc phân cấp rõ ràng
 *  -
 */

const a   = 1;
const abc = 2;
