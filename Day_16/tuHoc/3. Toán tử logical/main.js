/* Toán tử AND (&&) -> Kiểm tra nhiều điều kiện đúng */
let temperature = 10;
let dayOff = "Sunday";
let today = "Sunday";

// // Cả 2 điều kiện đúng thì mới lọt vào
// if (temperature > 20 && dayOff === today) {
//     console.log("Đi picnic!");
// } else {
//     console.log("Ở nhà");
// }

// Tách thành biến giúp code có ý nghĩa hơn
let isWeatherGood = temperature > 20;
let hasFreeTime = today === dayOff;

if (isWeatherGood && hasFreeTime) {
    console.log("Đi picnic!");
} else {
    console.log("Ở nhà");
}

/* Toán tử OR (||) */
// Một trong các điều kiện đúng -> lọt vào
if (temperature > 20 || dayOff === today) {
    console.log("Đi picnic!");
} else {
    console.log("Ở nhà");
}

/* Toán tử NOT (!) */
let isCatLover = false;
if (!isCatLover) {
    console.log("Kô");
}

// if (isCatLover === false) {
//     console.log("Kô");
// }

/* Kết hợp toán tử */
let isNewUser = true;
let isVipMember = false;
let purchaseAmount = 600000;

if ((isNewUser || isVipMember) && purchaseAmount > 500000) {
    console.log("Đủ điều kiện nhận quà!");
} else {
    console.log("Không đủ điều kiện nhận quà");
}

// Trình tự ưu tiên: ! --> && --> ||

function investmentDecision(riskLevel, expectedROI) {
    return (
        (riskLevel !== "high" && expectedROI > 0.1) ||
        (riskLevel === "high" && expectedROI > 0.2)
    );
}

function determineTravelPlan(isWeatherGood, budget, likesAdventure) {
    if (!isWeatherGood) {
        return "Hoãn kế hoạch";
    }
    if (budget >= 5000) {
        return likesAdventure ? "Du lịch núi" : "Du lịch biển";
    }
    return "Khám phá địa phương";
}

function determineStudentCategory(score, attendanceRate) {
    if (attendanceRate < 0.5) {
        return "Cần cải thiện";
    }
    if (score >= 90) {
        return "Xuất sắc";
    }
    if (score >= 75 && attendanceRate >= 0.7) {
        return "Giỏi";
    }
    if (score >= 60 && attendanceRate >= 0.6) {
        return "Khá";
    }
    return "Trung bình";
}

function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
    return isManager || (hasAccessCard && passedSafetyTest);
}

console.log(determineStudentCategory(92, 0.85)); // Xuất sắc
console.log(hasAccessToWorkroom(false, true, true)); // true
