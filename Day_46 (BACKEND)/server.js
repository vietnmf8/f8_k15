const http = require("node:http");

/* In memory DB */
const db = {
    tasks: [
        {
            id: 1,
            title: "Nau com",
        },
        {
            id: 2,
            title: "Quet nha",
        },
    ],
};

/* Tạo server */
const server = http.createServer((req, res) => {
    /**
     * GET
     */
    /* Nếu gửi Request với method GET và có url là `/api/tasks` */
    if (req.method === "GET" && req.url === "/api/tasks") {
        /* Thì response trả về bao gồm: */
        // 1. Header
        res.writeHead(200, { "Content-Type": "application/json" });
        // 2. Body (end: Điểm kết thúc)
        // Trả về một JSON
        res.end(JSON.stringify(db.tasks));
    }

    /**
     * POST
     */
    if (req.method === "POST" && req.url === "/api/tasks") {
        /* 1. Tạo body trả về */
        let body = "";

        /* 2. Nhận các mảnh request gửi lên */
        req.on("data", (chunk) => {
            // 3. Thu thập các mảnh từ request (dạng chuỗi)
            body += chunk.toString();
        });

        /* 3. Kết thúc req (Báo hiệu đã thu thập đến mảnh request cuối cùng) */
        req.on("end", () => {
            // Lấy ra dữ liệu (dạng js) từ request
            const payload = JSON.parse(body);

            // Tìm ra id lớn nhất!
            const maxId = Math.max(...db.tasks.map((t) => t.id));

            // Tạo task mới (lấy ra dữ liệu cần từ request, không dùng cả request)
            const newTask = {
                id: maxId + 1,
                title: payload.title,
            };

            // Thêm task mới vào db
            db.tasks.push(newTask);

            /* Trả về */
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    data: newTask,
                })
            );
        });

        return;
    }

    /**
     * PUT
     */
    if (req.method === "PUT" && req.url.startsWith("/api/tasks")) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const payload = JSON.parse(body);
            const idEditing = Number(req.url.split("/").pop());
            const index = db.tasks.findIndex((task) => task.id === idEditing);
            db.tasks[index].title = payload.title;

            /* Trả về */
            res.writeHead(204, { "Content-Type": "application/json" });
            res.end(JSON.stringify(db.tasks.index));
        });

        return;
    }
});

server.listen(3000, () => {
    console.log("Server start 1...");
});
