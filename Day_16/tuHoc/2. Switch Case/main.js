// /* Switch Case */
// switch (bien) {
//     case gia_tri_1:
//         // Khối lệnh
//         break;
//     case gia_tri_2:
//         // Khối lệnh
//         break;
//     case gia_tri_3:
//         // Khối lệnh
//         break;
//     default:
//     // Khối lệnh
// }

const gradeStudent = function (score) {
    switch (true) {
        case score >= 90:
            return "Xuất sắc";
        case score >= 80:
            return "Giỏi";
        case score >= 70:
            return "Khá";
        case score >= 60:
            return "Trung bình";
        default:
            return "Yếu";
    }
};

console.log(gradeStudent(85)); // Giỏi
console.log(gradeStudent(55)); // Yếu
