console.log(); // Thêm dòng trống
// 1. Khởi động Tàu Vũ trụ K9
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K9";
const crew = [
  "Lan Anh",
  "Duyên",
  "Lâm",
  "Long",
  "Khanh",
  "Khánh",
  "Thoại",
  "Thuỷ",
  "Thanh",
  "Tuấn",
  "Trang",
];
function launchShip(crew) {
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!`;
}
console.log(launchShip(crew));

console.log();//Thêm dòng trống
// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
const speed = 1000; 
const time = 24;    
const distance = calculateDistance(speed, time);
console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);

// Cách 2: Truyền trực tiếp tham số vào hàm, Tuy nhiên không thể tái sử dụng các tham số đó.
// function calculateDistance(speed, time) {
//   let distance = speed * time;
//   return distance;
// }
// distance = calculateDistance(1000, 24);
// console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);

//Cách 3: Kiểm tra giá trị đầu vào có phải là số dương không
// function calculateDistance(speed, time) {
//     if (typeof speed !== 'number' || typeof time !== 'number') {
//         return 'Tốc độ và thời gian phải là số.';
//     }
//     if (speed <= 0 || time <= 0) {
//         return 'Tốc độ và thời gian phải là số dương.';
//     }
//     return `Khoảng cách đến hành tinh bí ẩn là ${speed * time} km.`;
// }
// const speed = 1000; 
// const time = 24; 
// const result = calculateDistance(speed, time);
// console.log(result);

//Cách 4: Sử dụng Object: Dễ thêm nhiều tham số khác, dễ tái sử dụng
// const calculate = {
//     speed: 1000, 
//     time: 24     
// };
// function calculateDistance({ speed, time }) {
//     return speed * time;
// }
// const distance = calculateDistance(calculate);
// console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);

console.log(); // Thêm dòng trống
// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  return time.toString(16);
}
timeInHex = convertTimeToHex(120);
console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${timeInHex}`);

// Cách 2: Kiểm tra giá trị đầu vào (thời gian) có phải số dương không
// function convertTimeToHex(time) {
//     if (typeof time !== 'number' || time < 0) {
//         return null;
//     }
//     return time.toString(16); 
// }
// const timeInHex = convertTimeToHex(120);
// if (timeInHex === null) {
//     console.log('Thời gian phải là số dương.'); 
// } else {
//     console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${timeInHex}`);
// }

console.log(); // Thêm dòng trống 
// 4. Khám phá kho báu
function decryptCode(code) {
  let decrypted = " ";
  for (let i = 0; i < code.length; i++) {
    let char = code[i];
    if (char === char.toLowerCase()) {
      decrypted += char.toUpperCase();
    } else {
      decrypted += char.toLowerCase();
    }
  }
  return decrypted;
}
let code = "K9 Challenge";
let decryptedCode = decryptCode(code);
console.log(`Mật mã '${code}' sau khi giải mã là: ${decryptedCode}`);
// Có thể truyền trực tiếp chuỗi "K9 Challenge" vào hàm decryptCode:
// let decryptedCode = decryptCode("K9 Challenge");
// tuy nhiên, sử dụng cách trên có thể tái sử dụng biến code trong nhiều nơi khác trong đoạn code

// Cách 2: Dùng for...of
// function decryptCode(code) {
//     let decrypted = '';
//     for (const char of code) {
//         if (char === char.toLowerCase()) {
//             decrypted += char.toUpperCase();
//         } else {
//             decrypted += char.toLowerCase();
//         }
//     }
//     return decrypted;
// }
// let code = "K9 Challenge";
// let decryptedCode = decryptCode(code);
// console.log(`Mật mã ${code} sau khi giải mã là: ${decryptedCode}`);

console.log(); // Thêm dòng trống
// 5. Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị về Trái Đất!");
}
returnToEarth();
console.log(); // Thêm dòng trống