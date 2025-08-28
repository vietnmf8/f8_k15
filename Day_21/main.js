/* Lấy phần tử trong DOM */
// document.getElementById("id-name"): Lấy phần tử đầu tiên khớp với "id-name", nếu không trả về null
const h1 = document.getElementById("heading");

// document.getElementsByClassName("class-name"): Lấy toàn bộ các phần tử khớp với class-name, trả về danh sách các phần tử khớp, không có thì trả về danh sách rỗng (HTML Collection)
const headings = document.getElementsByClassName("heading-2")

// document.getElementsByTagName("tag-name"): Lấy toàn bộ các phần tử khớp với tag-name, trả về danh sách các phần tử khớp, không có thì trả về danh sách rỗng (HTML Collection)
const h2 = document.getElementsByTagName("h2")

// document.querySelector("CSS-selector"): Trả về một phần tử đầu tiên khớp với "CSS-Selector", không có trả về null

// document.querySelectorAll("CSS-selector"): Trả về tất cả phần tử  khớp với "CSS-Selector", không có trả về danh sách rỗng (NodeList)

console.log(document.querySelector(".heading-2"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("p:nth-of-type(2)"));