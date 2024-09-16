// 1. In ra tất cả các ký tự của một chuỗi. Ví dụ chuỗi Playwright thì sẽ in ra
// P
// l
// a
// y
// w
// r
// i
// g
// h
// t
const str = "Playwright";
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}
// 2. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
// thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.


// 3. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”] => dua vao bai tap for
const string = "Playwright";
const newString = [];
for (let i = string.length - 1; i >= 0; i--){
    newString.push(string[i]);
}
console.log(newString);

// 4. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
// 1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]