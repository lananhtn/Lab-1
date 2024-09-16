// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3
const arr = [1, 3, 5, 6, 8, 15, 44];
for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
}

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
const array = [1, 2, 3];
let total = 0;
let max = array[0];
let min = arr[0];
for (let i = 0; i < array.length; i++) {
    // Tính tổng
    total += array[i];
    // Tìm giá trị lớn nhất
    if (array[i] > max) {
        max = array[i];
    }
    // Tìm giá trị nhỏ nhất
    if (array[i] < min) {
        min = array[i];
    }
}
console.log("Tổng: " + total);
console.log("Giá trị lớn nhất: " + max);
console.log("Giá trị nhỏ nhất: " + min);


// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
// dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

const arr1 = [1, 2, 3];
// Tạo mảng mới
const arr2 = [];
// Dùng vòng lặp for để nhân đôi từng phần tử
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
// In mảng mới 
console.log(arr2); // [2, 4, 6]
