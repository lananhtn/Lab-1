// Lặp từ 1 tới 100
//i. Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
//ii. Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

let i;
for (i = 1; i <=100; i++){
    if(i % 2 == 0){
        console.log("Số", i + " là số chẵn");
    }
    if(i % 2 != 0){
        console.log("Số", i + " là số lẻ");
    }
}