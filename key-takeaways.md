# 1. DOM
## 1.1. Tổng quan về DOM
- DOM = Document Object ModelDOM: Cấu trúc một trang web 
- Cấu trúc: 
<[thẻ mở] [thuộc tính] = "giá trị thuộc tính"> [Text] </thẻ đóng>

## 1.2. Thẻ HTML thường gặp
- Thẻ < div >: Chia các khối trong trang web
- Thẻ < h1 ></ h1 > đến < h6 ></ h6 >: Tạo các header phân cấp
- Thẻ < form ></ form >: Chứa 1 form thông tin 
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: ô input dạng to
- Thẻ list và dropdown 
- Thẻ button 
- Thẻ table: 
- Thẻ date picker
- Thẻ slide
- Thẻ iframe: Nhúng vào 1 trang web

# 2. Selector
## 2.1. Khái niệm
- Selector là cách chọn phần tử trên trang 
- XPath = XML Path
## 2.2. Phân loại
- Tuyệt đối: Đi dọc theo cây DOM
- *Bắt đầu bởi một dấu /*
- VD: */html/body/div[2]/from/div/input*
- Tương đối: Tìm dựa vào đặc tính 
- *Bắt đầu bới 2 dấu //*
- *Có thể dùng 'and' và 'or'*
- VD: *//[@id="email]*

# 3. Playwight basic
- test: Đơn vị cơ bản để khai báo 1 test
- step: Khai báo từng step của test case
- Navigate: Di chuyển tới 1 trang
- *VD: await
page.goto('https://pw-practice.playwright
vn.com/');*
- Click: 
- * Single click:
- * *VD: 
await page.locator("//button").click();* 
- * Double click:
- * *VD: await page.locator("//button").dblclick();*
- * Click chuột phải:
- * *VD: page.locator("//button").click({
button: 'right'
})*
- * Click chuột kèm bấm phím khác:
- * *VD: page.locator("").click({
modifiers: ['Shift'],
})*
- input (có thể dùng delay)
- * Fill: *page.locator("//input").fill('Playwright
Viet Nam');*
- * pressSequentially: *VD: page.locator("//input").pressSequentially
('Playwright Viet Nam', {
delay: 100,
});*
- Radio/checkbox
- * (Lấy giá trị hiện tại đang là check hay không): 
*const isChecked =
page.locator("//input").isChecked();*
- * Check/ uncheck
*page.locator("//input").check();
page.locator("//input").setChecked(false);*
- Hover: *await page.locator("<xpath here>").hover();*
- text(): Hàm dùng để tìm ra phần tử có giá trị tương ứng:
- * VD: //div[text()=’This is a text’]
- contains(): contains(<giá trị>, <giá trị contains>)
- confirmation
dialog: dialog.accep()


