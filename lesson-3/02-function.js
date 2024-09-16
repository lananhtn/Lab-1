// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì). Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
function BMI(height, weight){
    let bmi = weight / (height * height);
    if(bmi < 18.5){
        console.log("Thiếu cân");
    } else if(bmi < 25 && bmi >=18.5){
        console.log("Bình thường");
    } else if(bmi < 30 && bmi >=25){
        console.log("Thừa cân");
    } else{
        console.log("Béo phì");
    }
} 
BMI(1.65, 50);

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
function convert(value, type){
    let result;
    if(type == 'C'){
        result = value * 9 / 5 + 32;
        console.log(value + " độ C" + " = " + result + " độ F");
    } else if(type == 'F'){
        result = (value - 32) * 5 / 9;
        console.log(value + " độ F" + " = " + result + " độ C");
    }else{
        console.log("Nhiệt độ không xác định, vui lòng chọn C hoặc F");
    }
}
convert(30, 'C'); // Chuyển từ độ C sang độ F
convert(86, 'F'); // Chuyển từ độ F sang độ C


// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
// Khai báo mảng
const numbers = [1, 2, 3, 4, 5];
// Hàm tính tổng các phần tử trong mảng
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; // Thêm câu lệnh return để trả về tổng
}
// Tính tổng và in ra kết quả
const total = sumArray(numbers);
console.log("Tổng các phần tử trong mảng là:", total);

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho. Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
// Hàm kiểm tra số nguyên tố và in ra nếu số nguyên tố
// Hàm kiểm tra số nguyên tố và in ra nếu số nguyên tố
function printPrimes(arr) {
    for (const num of arr) {
        if (num <= 1) continue; // 0 và 1 không phải số nguyên tố
        if (num === 2) {
            console.log(num); // 2 là số nguyên tố
            continue;
        }
        if (num % 2 === 0) continue; // Số chia hết cho 2 không phải số nguyên tố
        
        // Kiểm tra từ 3 đến căn bậc hai của num
        let isPrime = true; // Giả định số nguyên tố
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                isPrime = false; // Không phải số nguyên tố
                break; // Dừng kiểm tra sớm
            }
        }

        if (isPrime) {
            console.log(num); // In số nguyên tố
        }
    }
}

// Ví dụ sử dụng
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printPrimes(array);


// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail
// Khai báo mảng global các object có 2 thuộc tính: name, email
const users = [
    { name: 'Anh', email: 'anh@example.com' },
    { name: 'Lan', email: 'lan@example.com' },
    { name: 'Hoa', email: 'hoa@example.com' }
];
// Hàm cập nhật email cho người dùng dựa trên tên
function updateEmail(name, newEmail) {
    // Duyệt trong mảng users
    for (let i = 0; i < users.length; i++) {
        // Nếu tìm thấy người dùng với tên trùng với tham số name
        if (users[i].name === name) {
            // Cập nhật email
            users[i].email = newEmail;
            // return; // Kết thúc hàm sau khi cập nhật
        }
    }
    console.log("Tên người dùng không tìm thấy.");
}
updateEmail('Ha', 'anh.new@example.com');
console.log(users);

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
// Khai báo mảng các đối tượng sinh viên
const students = [
    { name: 'Alex', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 },
    { name: 'Diana', score: 92 }
];
// Hàm tính điểm trung bình
function calculateAverageScore(arr) {
    let totalScore = 0;
    let count = arr.length;
    // Duyệt qua mảng để tính tổng điểm
    for (let i = 0; i < arr.length; i++) {
        totalScore += arr[i].score;
    }
    // Tính điểm trung bình
    let averageScore = totalScore / count;
    return averageScore;
}
const average = calculateAverageScore(students);
console.log("Điểm trung bình của các sinh viên là:", average);

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }
const product = [
    {name: "Táo", price: 12},
    {name: "Mận", price: 10},
    {name: "Ổi", price: 120},
    {name: "Nho", price: 1}
]

// Biến toàn cục để lưu kết quả kiểm tra
let allPrices = true;

// Hàm kiểm tra xem tất cả sản phẩm trong giỏ hàng có giá lớn hơn 0 không
function checkPrice(arr) {
    for (const index in arr) {
        if (arr[index].price <= 0) {
            allPrices = false; // Nếu có sản phẩm có giá không lớn hơn 0, cập nhật kết quả
            break; // Dừng vòng lặp 
        }
    }
}
// Thực hiện kiểm tra
checkPrice(product);
// In ra kết quả sử dụng biến toàn cục
console.log("Tất cả sản phẩm có giá lớn hơn 0:", allPrices);

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.
function time(i){
    if(i>=9 && i<=21){
        console.log("Cửa hàng đang mở cửa");
    }else if(i>24){
        console.log("Thời gian không hợp lệ");
    }else{
        console.log("Cửa hàng đã đóng cửa");
    }
}
time(22);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function ticket(age){
    if(age < 5){
        console.log("Miễn phí vé vào cổng");
    }else if(age >= 18){
        console.log("Giá vé là 100K");
    }else if(age >=6){
        console.log("Giá vé là 50K");
    }else{
        console.log("Tuổi không hợp lệ");
    }
}
ticket(3)
ticket(5);
ticket(7);
ticket(18);
ticket(100);

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.
function month(time){
    switch (time){
        case 1:
        console.log("Tháng 1");
        break;
        case 2:
        console.log("Tháng 2");
        break;
        case 3:
        console.log("Tháng 3");
        break;
        case 4:
        console.log("Tháng 4");
        break;
        case 5:
        console.log("Tháng 5");
        break;
        case 6:
        console.log("Tháng 6");
        break;
        case 7:
        console.log("Tháng 7");
        break;
        case 8:
        console.log("Tháng 8");
        break;
        case 9:
        console.log("Tháng 9");
        break;
        case 10:
        console.log("Tháng 10");
        break;
        case 11:
        console.log("Tháng 11");
        break;
        case 12:
        console.log("Tháng 12");
        break;
        default:
        console.log("Ngày không hợp lệ!");
    }
}
month(14);
month(2);
month(7);

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
//     6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function diem(num){
    if(num < 5){
        console.log("Học sinh yếu")
    }else if(num >=5 && num < 6.5){
        console.log("Học sinh trung bình");
    }else if(num >= 6.5 && num <8){
        console.log("Học sinh khá");
    }else{
        console.log("Học sinh giỏi");
    }
}
diem(1);
diem(5);
diem(6.5);
diem(10);
//  12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function weather(num){
    if(num >= 30){
        console.log("Thời tiết nóng")
    }else if(num < 20){
        console.log("Thời tiết lạnh");
    }else{
        console.log("Thời tiết mát");
    }
}
weather(-4);
weather(40);
weather(20);
