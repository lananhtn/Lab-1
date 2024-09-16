// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
const student = {
  name: "Alex",
  age: 10
};
for (let property in student) {
  console.log(property + ": " + student[property]);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20).
const user = {
    name: "Alex",
    age: 10,
    salary: 20
};
let sum = 0;
for (let key in user) {
    // Kiểm tra nếu giá trị là số
    if (typeof user[key] === 'number') {
        sum += user[key];
    }
}
console.log(sum); 

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

const object = {
    name: "Alex",
    age: 10
};
const arrNames = [];
for (let key in object) {
    // Thêm tên thuộc tính vào mảng
    arrNames.push(key);
}
console.log(arrNames); 
