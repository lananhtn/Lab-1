//Khai báo chiều cao
const height = 165;
//Lấy số lẻ của chiều cao
const xHeight = height % 100;
//Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
const iWeight = (xHeight * 9) / 10;
// Cân năng tối đa = số lẻ chiểu cao
const maxWeight = xHeight;
// Cân nặng tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
const minWeight = (xHeight * 8) / 10;
//b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng
console.log("Cân nặng lý tưởng là:",iWeight + " kg," + " Cân nặng tối đa là:", maxWeight + " kg," + " Cân nặng tối thiểu là:", minWeight + " kg");


