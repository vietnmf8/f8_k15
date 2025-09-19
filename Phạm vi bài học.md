# 📌 JavaScript DOM, BOM & Asynchronous Programming -- Ghi chú khoa học

## 1. Truy vấn DOM (DOM Query)

-   `getElementById(id)` → lấy phần tử theo **id** (trả về 1 phần tử).
-   `getElementsByClassName(class)` → lấy danh sách phần tử theo
    **class** (HTMLCollection).
-   `getElementsByTagName(tag)` → lấy danh sách phần tử theo **tag**.
-   `querySelector(cssSelector)` → lấy phần tử **đầu tiên** khớp với
    selector.
-   `querySelectorAll(cssSelector)` → lấy **tất cả** phần tử khớp
    (NodeList).

------------------------------------------------------------------------

## 2. Nội dung & HTML

-   `innerText` → lấy / gán **nội dung hiển thị** (ảnh hưởng bởi CSS,
    chỉ text người dùng thấy).
-   `textContent` → lấy / gán toàn bộ **nội dung text** (kể cả bị ẩn).
-   `innerHTML` → lấy / gán **HTML bên trong** phần tử.
-   `outerHTML` → lấy / gán **HTML bao gồm cả phần tử đó**.

------------------------------------------------------------------------

## 3. Thuộc tính & Class

-   `getAttribute(name)`
-   `setAttribute(name, value)`
-   `hasAttribute(name)`
-   `toggleAttribute(name)`
-   `removeAttribute(name)`

**Class manipulation:** 
- `element.className` → chuỗi chứa toàn bộ class. 
- `classList.add(name)` 
- `classList.remove(name)` 
- `classList.contains(name)` 
- `classList.replace(old, new)` 
- `classList.toggle(name)`

------------------------------------------------------------------------

## 4. Lắng nghe sự kiện

-   Trực tiếp: `onclick`, `onsubmit`, ...
-   Ngăn chặn mặc định: `e.preventDefault()`
-   Ngăn chặn nổi bọt: `e.stopPropagation()`

**addEventListener** (phổ biến): 
- Chuột: `click`, `contextmenu`, `mousedown`, `mouseup`, `mousemove`, `mouseenter`, `mouseleave`, `scroll` 
- Cảm ứng: `touchstart`, `touchend`, `touchmove` 
- Bàn phím: `keydown`, `keyup` 
- Media: `play`, `pause`, `timeupdate` (dùng để lấy `currentTime`)

------------------------------------------------------------------------

## 5. Lưu trữ & Bảo mật

-   `localStorage.setItem(key, value)` → lưu dữ liệu.
-   `localStorage.getItem(key)`
-   `localStorage.removeItem(key)`
-   `JSON.stringify(obj)` / `JSON.parse(str)` → chuyển đổi dữ liệu phức
    tạp.
-   **Phòng tránh XSS** → không chèn trực tiếp input người dùng vào
    `innerHTML`; nên dùng `textContent`.

------------------------------------------------------------------------

## 6. CSS với DOM

-   `Object.assign(element.style, { color: "red", fontSize: "20px" })`

------------------------------------------------------------------------

## 7. Kích thước phần tử

-   `clientWidth`, `clientHeight` → kích thước bên trong (trừ scrollbar,
    có padding).
-   `offsetWidth`, `offsetHeight` → kích thước đầy đủ (gồm border,
    scrollbar).

------------------------------------------------------------------------

## 8. Vị trí phần tử

-   `clientTop`, `clientLeft` → độ dày border phía trên/trái.
-   `offsetTop`, `offsetLeft` → vị trí của phần tử **so với phần tử cha
    có position**.

------------------------------------------------------------------------

## 9. BOM - Browser Object Model

### 9.1. Window Object
- **Biến toàn cục**: Tất cả thuộc tính và phương thức của `window` đều là toàn cục
- `window.userName = "value"` → có thể truy cập trực tiếp bằng `userName`
- Biến khai báo với `var` nằm trong `window`, `const`/`let` thì không
- ID của element tự động trở thành thuộc tính của `window`

**Kích thước viewport:**
- `window.innerWidth`, `window.innerHeight` → kích thước viewport (không bao gồm thanh cuộn, toolbar)
- `window.outerWidth`, `window.outerHeight` → kích thước toàn bộ cửa sổ trình duyệt

**Vị trí cửa sổ:**
- `window.screenX`, `window.screenY` → tọa độ cửa sổ trình duyệt so với màn hình

**Sự kiện:**
- `window.addEventListener("resize", callback)` → lắng nghe thay đổi kích thước
- `window.addEventListener("scroll", callback)` → lắng nghe cuộn trang

------------------------------------------------------------------------

### 9.2. Screen Object
- `screen.width`, `screen.height` → độ phân giải màn hình
- `screen.availWidth`, `screen.availHeight` → kích thước khả dụng (trừ taskbar)
- `screen.orientation` → thông tin xoay màn hình

------------------------------------------------------------------------

### 9.3. Navigator Object
**Clipboard API:**
- `navigator.clipboard.readText()` → đọc dữ liệu từ clipboard
- `navigator.clipboard.writeText(text)` → ghi dữ liệu vào clipboard

**Media API:**
- `navigator.mediaDevices.getUserMedia({video: true})` → truy cập camera/mic

**Geolocation API:**
- `navigator.geolocation.getCurrentPosition()` → lấy vị trí địa lý

**User Agent:**
- `navigator.userAgent` → thông tin trình duyệt (dùng cho Adaptive Design)

------------------------------------------------------------------------

### 9.4. Location Object
**Thuộc tính URL:**
- `location.href` → toàn bộ URL
- `location.origin` → protocol + domain + port  
- `location.host` → domain + port
- `location.hostname` → chỉ domain
- `location.port` → cổng
- `location.pathname` → đường dẫn
- `location.search` → query parameters (?key=value)
- `location.hash` → fragment (#section)

**Cấu trúc URL:**
```
https://example.com:80/blog?search=test&sort=date#header
  ↓        ↓        ↓   ↓         ↓              ↓
protocol  domain  port path   query params   fragment
```

**Chuyển hướng:**
- `location.href = "url"` → chuyển trang (lưu history)
- `location.assign("url")` → giống href
- `location.replace("url")` → chuyển trang (không lưu history)
- `location.reload()` → tải lại trang

------------------------------------------------------------------------

### 9.5. History Object
**Thuộc tính:**
- `history.length` → số trang trong lịch sử

**Điều hướng:**
- `history.back()` → lùi 1 trang
- `history.forward()` → tiến 1 trang  
- `history.go(n)` → tiến/lùi n trang (-1 lùi, 1 tiến)

**Single Page Application (SPA):**
- `history.pushState(state, title, url)` → thêm URL mới vào lịch sử (không tải lại trang)
- `history.replaceState(state, title, url)` → thay thế URL hiện tại (không tải lại trang)

------------------------------------------------------------------------

## 10. Custom Events & Dispatch

### 10.1. Dispatch Events
- Trình duyệt tự động phát sự kiện khi có tương tác
- `element.dispatchEvent(event)` → chủ động phát sự kiện

**Sự kiện chuẩn:**
```javascript
element.dispatchEvent(new Event("click"));
```

**Sự kiện tùy chỉnh:**
```javascript
element.dispatchEvent(new CustomEvent("my-event", {
    detail: { data: "value" }
}));

// Lắng nghe
element.addEventListener("my-event", (e) => {
    console.log(e.detail); // { data: "value" }
});
```

------------------------------------------------------------------------

### 10.2. Publish-Subscribe Pattern
- **Publisher**: Nơi phát sự kiện
- **Subscriber**: Nơi lắng nghe sự kiện
- Sử dụng `document` để phát sự kiện toàn cục

**Ví dụ Logging System:**
```javascript
function log(type, data) {
    document.dispatchEvent(new CustomEvent(type, {
        detail: data
    }));
}

// Sử dụng
log("user-action", { event: "click", element: "button" });
```

------------------------------------------------------------------------

### 10.3. Hack Clipboard
```javascript
element.addEventListener("copy", (e) => {
    e.preventDefault(); // Ngăn copy thông thường
    navigator.clipboard.writeText("Nội dung thay thế");
});
```

------------------------------------------------------------------------

## 11. JavaScript Synchronous vs Asynchronous

### 11.1. Synchronous (Đồng bộ)
- **Đặc điểm**: Code chạy tuần tự, từng dòng một
- **JavaScript là ngôn ngữ đơn luồng** (Single Thread)
- Ví dụ:
```javascript
console.log(1);
console.log(2); 
console.log(3);
// Kết quả: 1, 2, 3 (theo thứ tự)
```

### 11.2. Asynchronous (Bất đồng bộ)
- **Đặc điểm**: Code không chạy ngay, không theo thứ tự
- **Các loại thao tác bất đồng bộ**:
  - Timer (`setTimeout`, `setInterval`)
  - DOM events
  - Network requests (`fetch`, `XMLHttpRequest`)

**Tại sao cần bất đồng bộ:**
```javascript
// Đồng bộ: Tổng thời gian = 6s
// Việc 1: 2s + Việc 2: 2s + Việc 3: 2s = 6s

// Bất đồng bộ: Tổng thời gian = 2s (chạy song song)
setTimeout(() => console.log(1), 2000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 2000);
```

------------------------------------------------------------------------

## 12. Callback Functions

### 12.1. Định nghĩa Callback
- **Callback** = hàm được truyền làm đối số cho hàm khác
- **Mục đích**: Thông báo khi công việc bất đồng bộ hoàn thành

```javascript
function handle() {
    console.log("Công việc đã hoàn thành");
}

// handle là callback vì được truyền vào setTimeout
setTimeout(handle, 3000);
```

### 12.2. Ý nghĩa của Callback
- Không có callback → không biết khi nào thao tác bất đồng bộ xong
- Callback → được gọi lại khi thao tác hoàn thành

### 12.3. Callback Hell
- **Vấn đề**: Các công việc phụ thuộc nhau → lồng callback nhiều tầng
- **Ví dụ Callback Hell**:
```javascript
sendRequest("provinces", (provinces) => {
    const firstProvince = provinces[0];
    sendRequest(`districts?province_id=${firstProvince.id}`, (districts) => {
        const firstDistrict = districts[0];
        sendRequest(`wards?district_id=${firstDistrict.id}`, (wards) => {
            console.log(wards[0]); // 3 tầng lồng nhau!
        });
    });
});
```

------------------------------------------------------------------------

## 13. JSON - JavaScript Object Notation

### 13.1. Đặc điểm
- **JSON luôn là chuỗi**
- **Key phải trong dấu nháy kép**: `"key": "value"`
- **Hỗ trợ**: `string`, `number`, `boolean`, `null`, `array`, `object`
- **Không hỗ trợ**: `function`, `undefined`

### 13.2. Phương thức chuyển đổi
```javascript
// JavaScript → JSON
JSON.stringify({name: "Việt"}); // '{"name":"Việt"}'
JSON.stringify([1, 2, 3]);      // '[1,2,3]'

// JSON → JavaScript
JSON.parse('{"name":"Việt"}');  // {name: "Việt"}
JSON.parse('[1,2,3]');          // [1, 2, 3]
```

### 13.3. Ứng dụng
- **API**: Nhận dữ liệu từ server dạng JSON
- **localStorage**: Lưu trữ dữ liệu phức tạp
```javascript
// Lưu
localStorage.setItem("user", JSON.stringify({name: "Việt"}));
// Lấy
const user = JSON.parse(localStorage.getItem("user"));
```

------------------------------------------------------------------------

## 14. XMLHttpRequest (XHR)

### 14.1. Cách sử dụng cơ bản
```javascript
// 1. Tạo đối tượng XHR
const xhr = new XMLHttpRequest();

// 2. Cấu hình request
xhr.open("GET", "https://api.example.com/data", true);
// Tham số 3: true = bất đồng bộ, false = đồng bộ

// 3. Gửi request
xhr.send();

// 4. Xử lý response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        console.log(xhr.responseText);
    }
};
```

### 14.2. Phương thức tối ưu
```javascript
function sendRequest(method = "GET", url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            if (typeof callback === "function") {
                callback(this.responseText);
            }
        }
    };
}

// Sử dụng
sendRequest("GET", "https://api.example.com/data", (response) => {
    console.log(response);
});
```

### 14.3. Xử lý JSON tự động
```javascript
function sendRequest(method = "GET", url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                const contentType = xhr.getResponseHeader("content-type");
                const isJson = contentType && contentType.includes("application/json");
                
                if (isJson) {
                    try {
                        resolve(JSON.parse(this.responseText));
                    } catch (error) {
                        reject("Lỗi định dạng JSON!");
                    }
                } else {
                    resolve(this.responseText);
                }
            } else {
                reject(`HTTP CODE: ${xhr.status}`);
            }
        };
        
        xhr.onerror = () => {
            reject("Lỗi mạng!");
        };
    });
}
```

------------------------------------------------------------------------

## 15. Promise - Lời Hứa

### 15.1. Khái niệm
- **Promise**: Object đại diện cho kết quả trong tương lai
- **Tư tưởng**: "Tôi hứa sẽ làm việc này, khi xong sẽ báo kết quả"

### 15.2. Ba trạng thái của Promise
1. **Pending** (Đang chờ): Khi mới tạo Promise
2. **Fulfilled** (Thành công): Gọi `resolve()`
3. **Rejected** (Thất bại): Gọi `reject()`

### 15.3. Cú pháp cơ bản
```javascript
// Tạo Promise
const promise = new Promise((resolve, reject) => {
    // Thành công
    resolve("Kết quả thành công!");
    
    // Thất bại  
    // reject("Có lỗi xảy ra!");
});

// Xử lý kết quả
promise
    .then((result) => {
        console.log("Thành công:", result);
    })
    .catch((error) => {
        console.log("Thất bại:", error);
    });
```

### 15.4. Promise Chain
```javascript
promise
    .then((result) => {
        console.log("Bước 1:", result);
        return "Kết quả bước 1";
    })
    .then((result) => {
        console.log("Bước 2:", result);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Kết quả bước 2"), 1000);
        });
    })
    .then((result) => {
        console.log("Bước 3:", result);
    })
    .catch((error) => {
        console.log("Lỗi:", error);
    });
```

### 15.5. Try/Catch trong Promise
```javascript
function sendRequest(url) {
    return new Promise((resolve, reject) => {
        try {
            // Code có thể gây lỗi
            const data = JSON.parse(responseText);
            resolve(data);
        } catch (error) {
            reject("Lỗi định dạng JSON!");
        }
    });
}
```

------------------------------------------------------------------------

## 16. Promise Utilities

### 16.1. Promise.all()
- **Mục đích**: Chạy song song nhiều Promise, đợi tất cả hoàn thành
- **Đặc điểm**: 1 Promise lỗi → toàn bộ lỗi

```javascript
Promise.all([
    sendRequest("url1"),
    sendRequest("url2"), 
    sendRequest("url3")
])
.then((results) => {
    console.log("Tất cả thành công:", results);
})
.catch((error) => {
    console.log("Có lỗi:", error);
});
```

### 16.2. Promise.allSettled()
- **Mục đích**: Chạy song song, đợi tất cả hoàn thành (kể cả lỗi)
- **Đặc điểm**: Luôn vào `.then()`, không vào `.catch()`

```javascript
Promise.allSettled([
    sendRequest("url1"),
    sendRequest("url2"),
    Promise.reject("Lỗi")
])
.then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Thành công:", result.value);
        } else {
            console.log("Lỗi:", result.reason);
        }
    });
});
```

### 16.3. Promise.race()
- **Mục đích**: Lấy kết quả của Promise hoàn thành **sớm nhất**
- **Ứng dụng**: Tạo timeout cho Request

```javascript
Promise.race([
    sendRequest("url"),
    new Promise((_, reject) => {
        setTimeout(() => reject("Timeout!"), 5000);
    })
])
.then((result) => {
    console.log("Kết quả:", result);
})
.catch((error) => {
    console.log("Lỗi hoặc timeout:", error);
});
```

### 16.4. Promise.resolve() & Promise.reject()
```javascript
// Tạo Promise thành công ngay
Promise.resolve("Thành công").then(console.log);

// Tạo Promise lỗi ngay  
Promise.reject("Lỗi").catch(console.log);

// Ứng dụng: Đảm bảo luôn trả về Promise
function getData(useCache) {
    if (useCache) {
        return Promise.resolve(cachedData);
    }
    return sendRequest("api/data");
}
```

------------------------------------------------------------------------

## 17. Async/Await - ES6

### 17.1. Khái niệm
- **async**: Biến function thành Promise function
- **await**: Chờ Promise resolve, viết code như đồng bộ
- **Mục đích**: Code bất đồng bộ nhìn như đồng bộ

### 17.2. Cú pháp
```javascript
// Async function luôn trả về Promise
async function getData() {
    return "Dữ liệu"; // Tương đương Promise.resolve("Dữ liệu")
}

getData().then(console.log); // "Dữ liệu"
```

### 17.3. Await cơ bản
```javascript
async function processData() {
    try {
        const province = await getFirstProvince();
        const district = await getFirstDistrict(province.province_id);
        const ward = await getFirstWard(district.district_id);
        
        console.log(ward);
    } catch (error) {
        console.log("Lỗi:", error);
    }
}
```

### 17.4. Quy tắc Async/Await
- **async** chỉ dùng khi khai báo function
- **await** chỉ dùng trong async function và ở top-level
- **await** chỉ await Promise
- Dùng **try/catch** để bắt lỗi

### 17.5. So sánh với Promise Chain
```javascript
// Promise Chain
getFirstProvince()
    .then(province => getFirstDistrict(province.province_id))
    .then(district => getFirstWard(district.district_id))
    .then(console.log)
    .catch(console.error);

// Async/Await  
async function process() {
    try {
        const province = await getFirstProvince();
        const district = await getFirstDistrict(province.province_id);
        const ward = await getFirstWard(district.district_id);
        console.log(ward);
    } catch (error) {
        console.error(error);
    }
}
```

------------------------------------------------------------------------

## 18. Async/Await Advanced

### 18.1. Vòng lặp với Async/Await
```javascript
// ❌ SAI: forEach với async
ids.forEach(async (id) => {
    const result = await send(id, 1000);
    console.log(result); // Chạy song song, không tuần tự
});

// ✅ ĐÚNG: for...of với async  
async function processSequential() {
    const ids = [1, 2, 3, 4, 5];
    
    for (let id of ids) {
        const result = await send(id, 1000);
        console.log(result); // Chạy tuần tự, tổng thời gian 5s
    }
}
```

### 18.2. Promise.all với Async/Await
```javascript
async function processParallel() {
    try {
        // Chạy song song, thời gian = Promise chậm nhất
        const results = await Promise.all([
            send(1, 1000),
            send(2, 1000), 
            send(3, 1000)
        ]);
        
        console.log(results);
    } catch (error) {
        console.log("Có lỗi:", error);
    }
}
```

### 18.3. So sánh Sequential vs Parallel
```javascript
// Sequential: Tuần tự (3s)
async function sequential() {
    const result1 = await send(1, 1000);
    const result2 = await send(2, 1000);  
    const result3 = await send(3, 1000);
}

// Parallel: Song song (1s)
async function parallel() {
    const results = await Promise.all([
        send(1, 1000),
        send(2, 1000),
        send(3, 1000)
    ]);
}
```

------------------------------------------------------------------------

## 19. Error Handling trong Async Programming

### 19.1. Try/Catch với Async/Await
```javascript
async function handleErrors() {
    try {
        const data = await riskyOperation();
        console.log("Thành công:", data);
    } catch (error) {
        console.log("Lỗi:", error);
        // Xử lý lỗi cụ thể
        if (error.code === 'NETWORK_ERROR') {
            // Retry logic
        }
    }
}
```

### 19.2. Error Handling với Promise
```javascript
sendRequest("api/data")
    .then((data) => {
        console.log("Thành công:", data);
    })
    .catch((error) => {
        console.log("Lỗi:", error);
        
        // Chain tiếp tục sau catch
        return "Dữ liệu mặc định";
    })
    .then((data) => {
        console.log("Xử lý tiếp:", data);
    });
```

### 19.3. Các nguồn lỗi trong Async
1. **Network Error**: Lỗi mạng
2. **HTTP Error**: Status code 4xx, 5xx  
3. **Parse Error**: Lỗi JSON.parse()
4. **Logic Error**: Lỗi trong code xử lý

------------------------------------------------------------------------

## 20. Best Practices

### 20.1. Khi nào dùng gì?
- **Callback**: Đã lỗi thời, tránh sử dụng
- **Promise**: Phù hợp với chain logic phức tạp
- **Async/Await**: Phù hợp với code tuyến tính, dễ đọc

### 20.2. Tips
1. **Luôn có error handling** (try/catch hoặc .catch())
2. **Chọn Sequential vs Parallel** phù hợp
3. **Tránh callback hell** bằng Promise hoặc async/await
4. **Sử dụng Promise.all** cho các tác vụ độc lập
5. **Timeout cho network requests** bằng Promise.race

### 20.3. Code tái sử dụng
```javascript
// Utility function
async function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), ms);
    });
    
    return Promise.race([promise, timeout]);
}

// Sử dụng
try {
    const data = await withTimeout(sendRequest("api/data"), 5000);
    console.log(data);
} catch (error) {
    console.log("Lỗi hoặc timeout:", error.message);
}
```