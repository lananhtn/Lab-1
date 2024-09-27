import { test } from "@playwright/test";

test("Add personal notes", async ({ page }) => {
    const notes = [
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tàu vũ trụ", 
        content: "Hiện tượng dị thường bí ẩn ảnh hưởng tới tàu vũ trụ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tàu vũ trụ", 
        content: "Hiện tượng dị thường bí ẩn ảnh hưởng tới tàu vũ trụ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
        {title: "Tìm kiếm tài năng khởi nghiệp sáng tạo Quốc gia", 
        content: "Cuộc thi Tìm kiếm tài năng Khởi nghiệp sáng tạo Quốc gia bắt đầu nhận hồ sơ" },
    ];

        await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
            await page.goto("https://material.playwrightvn.com/");
        });
        await test.step("Click vào 'Bài học 4: Personal notes'", async () => {
            await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
        });
        await test.step("Thêm mới 10 note", async () => {
            for (const note of notes) {
                await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
                await page.locator('//textarea[@id="note-content"]').fill(note.content);
                await page.locator('//button[@id="add-note"]').click();
            }
        });
    
        await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
            await page.locator('//input[@type= "text" and @id= "search"]').fill('vũ');
        });
});

