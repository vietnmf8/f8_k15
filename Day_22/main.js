// const h1 = document.querySelector("h1");

// // innerText: Lấy text bên trong phần tử
// // textContent: Lấy text bên trong phần tử
// // innerHTML: lấy HTML bên trong phần tử
// // outerHTML: lấy HTML tính từ chính phần tử vào bên trong

// // console.dir(h1); // xem các thuộc tính bên trong

// // // Chỉ text
// // console.log(h1.innerText); // phần hiển thị trên trình duyệt
// // console.log(h1.textContent); // phần hiển thị trong editor

// // // Bao gồm HTML
// // console.log(h1.innerHTML);
// // console.log(h1.outerHTML);

// // h1.textContent = "<h1>Jack</h1>" // Chuyển sang entities -> vì chỉ hiểu chữ
// // h1.innerHTML = "<i>Hello World</i>" // Hiểu được HTML và tạo ra phần tử thật

// const users = [
//     {
//         id: 1,
//         slug: "lorem-ipsum",
//         url: "https://jsonplaceholder.org/posts/lorem-ipsum",
//         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         content:
//             "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
//         image: "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
//         thumbnail:
//             "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
//         status: "published",
//         category: "lorem",
//         publishedAt: "04/02/2023 13:25:21",
//         updatedAt: "14/03/2023 17:22:20",
//         userId: 1,
//     },
//     {
//         id: 2,
//         slug: "condimentum.",
//         url: "https://jsonplaceholder.org/posts/condimentum.",
//         title: "Quisque non ligula laoreet, volutpat velit cursus, condimentum arcu.",
//         content:
//             "Placerat erat consectetur mauris sollicitudin facilisis praesent nam nascetur! Semper odio est condimentum sollicitudin fames orci porttitor consequat platea urna. Sit faucibus luctus sollicitudin, purus euismod. Volutpat habitasse molestie magnis tempus tempus conubia! Quam fringilla vitae, lacus tortor fusce. Ante enim pretium proin nec, bibendum tempus ipsum porta. Hac nunc nunc pretium! Mauris consectetur, nulla taciti class. Porttitor, nulla rutrum integer torquent accumsan magnis? Morbi condimentum senectus pulvinar duis; himenaeos adipiscing. Lacus facilisi ad scelerisque vestibulum nisl. Mi torquent curae; gravida molestie sagittis imperdiet habitasse aenean mus. Nibh nibh nisl parturient odio eros lorem suspendisse blandit torquent cum elementum. Nibh feugiat metus cursus rutrum feugiat lacinia suspendisse suscipit mollis dolor eget nisl. Adipiscing ullamcorper lobortis in. Tellus taciti fames elit consectetur laoreet pulvinar. Potenti tristique a mus, eget pharetra! Viverra.",
//         image: "https://dummyimage.com/800x430/08110f/condimentum..png&text=jsonplaceholder.org",
//         thumbnail:
//             "https://dummyimage.com/200x200/08110f/condimentum..png&text=jsonplaceholder.org",
//         status: "published",
//         category: "lorem",
//         publishedAt: "25/12/2022 13:10:07",
//         updatedAt: "19/01/2023 08:25:17",
//         userId: 2,
//     },
//     {
//         id: 3,
//         slug: "morbi-dictum",
//         url: "https://jsonplaceholder.org/posts/morbi-dictum",
//         title: "Morbi dictum dui vel bibendum ultrices.",
//         content:
//             "Et ullamcorper, litora integer taciti suspendisse. Sociosqu hac bibendum elit quisque et porta in viverra sagittis conubia luctus himenaeos. Tempus ultricies egestas tempus aliquet commodo netus ultricies semper montes turpis eros dis. Scelerisque torquent enim ac pellentesque primis congue consectetur varius congue erat curae;! Scelerisque nunc condimentum class erat ultrices. Fringilla eros vulputate quisque platea aptent vivamus porta natoque. Laoreet vehicula aliquam, integer ornare interdum magna. Molestie facilisi volutpat platea primis aptent facilisi etiam ut vestibulum dis sagittis. Fames elit tincidunt id. Ante id tempus sollicitudin platea. Sagittis id fermentum litora placerat ligula primis consectetur dictum. Ligula orci facilisi dis, egestas tempus urna sollicitudin laoreet turpis tincidunt elementum imperdiet. Lobortis convallis natoque dictum dapibus enim accumsan diam pulvinar fusce. Proin nullam duis pretium hac hac dictum purus neque eget rutrum. Suspendisse sodales libero cum felis. Porta curabitur lobortis libero mollis at tempus egestas luctus erat sapien!",
//         image: "https://dummyimage.com/800x430/5e917f/morbi-dictum.png&text=jsonplaceholder.org",
//         thumbnail:
//             "https://dummyimage.com/200x200/5e917f/morbi-dictum.png&text=jsonplaceholder.org",
//         status: "published",
//         category: "lorem",
//         publishedAt: "06/02/2023 10:19:53",
//         updatedAt: "16/01/2023 07:25:47",
//         userId: 3,
//     },
//     {
//         id: 4,
//         slug: "feugiat",
//         url: "https://jsonplaceholder.org/posts/feugiat",
//         title: "Duis bibendum augue et feugiat imperdiet.",
//         content:
//             "Primis conubia vivamus vestibulum curabitur! Pellentesque ad vitae cras mollis morbi elementum. Quisque gravida arcu vehicula morbi scelerisque curae; mi sapien. Elementum cum interdum senectus dolor vulputate. Pulvinar ultricies mauris arcu primis aenean arcu sagittis. Vulputate mollis fermentum luctus magnis convallis pellentesque commodo montes ut suspendisse turpis. Fermentum dapibus mattis sociosqu condimentum aliquam. Ut magna vel lacinia dis luctus tincidunt dapibus montes ligula dictumst potenti duis. Lobortis lorem litora auctor parturient mollis vel etiam fusce euismod pretium? Integer per faucibus netus fringilla. Libero mi rhoncus est aliquam? Montes ultricies consequat hac fusce tempus lacinia taciti. Sagittis; luctus vestibulum mus libero eleifend. Tempor arcu gravida bibendum quam aptent. Ad scelerisque lectus volutpat semper, luctus urna magnis duis vitae aliquam. Ut iaculis magna nullam vivamus sociis cubilia maecenas accumsan. Inceptos proin montes ultricies nunc bibendum vestibulum lorem. Fames curae; lectus tempor lacus? Habitant nullam imperdiet eleifend sem odio tempor sit! Purus ornare dui, erat dictumst maecenas turpis penatibus. Cursus tellus congue luctus etiam pharetra potenti sagittis consequat odio. Integer gravida habitasse duis cum metus sociosqu aenean aliquet commodo cubilia imperdiet? Ante litora sapien rutrum sodales tortor odio tempor cubilia mus erat nascetur! Senectus natoque vehicula dui gravida.",
//         image: "https://dummyimage.com/800x430/81b563/feugiat.png&text=jsonplaceholder.org",
//         thumbnail:
//             "https://dummyimage.com/200x200/81b563/feugiat.png&text=jsonplaceholder.org",
//         status: "published",
//         category: "lorem",
//         publishedAt: "13/01/2023 15:18:26",
//         updatedAt: "23/01/2023 10:53:55",
//         userId: 4,
//     },
// ];

// // const html = users
// //   .map((user) => {
// //     const listItems = Object.values(user) // lấy mảng value
// //       .map((value) => `<li>${value}</li>`) // biến từng value thành <li>
// //       .join(""); // ghép lại

// //     return `<ul>${listItems}</ul>`;
// //   })
// //   .join("\n");

// // const html = posts.map((post) => {
// //     return `<ul>
// //         <li>${post.id}</li>
// //         <li>${post.slug}</li>
// //         <li>${post.url}</li>
// //         <li>${post.title}</li>
// //         <li>${post.content}</li>
// //         <li>${post.image}</li>
// //         <li>${post.thumbnail}</li>
// //         <li>${post.status}</li>
// //         <li>${post.category}</li>
// //         <li>${post.publishedAt}</li>
// //         <li>${post.updatedAt}</li>
// //         <li>${post.userId}</li>
// //     </ul>`
// // }).join("\n")

// // const usersList = document.querySelector(".users-list");
// // console.log(html);

// // usersList.innerHTML = html;

// const email = document.querySelector("#email");
// const password = document.querySelector("#password");

// // Lấy value của input
// // console.log(email.value);
// // console.log(password.value);

// // Set value
// email.value = "xyz@gmail.com";

// // Bắt click vào một phần tử
// // 1. Lấy phần tử
// // 2. element.onClick = () => {...logic}

// const loginBtn = document.querySelector("#login-btn");

// loginBtn.onClick = () => {
//     console.log("Clicked!");
//     // Load trang -> Hành vi mặc định của form
// }

// // Cách bắt sự kiện (event) submit của form:
// // 1. Lấy phần tử form trong DOM
// // 2. form.onsubmit = (e) => {
// //      ... Logic
// //      e.preventDefault() --> ngăn chặn mặc định
// //   }

// const loginForm = document.querySelector("#login-form")
// loginForm.onsubmit = (e) => {
//     e.preventDefault();

//     const data = {
//         email: email.value,
//         password: password.value
//     }

//     console.log(data);
//     //TODO: Gửi dữ liệu đi...
// }