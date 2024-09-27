import { test } from '@playwright/test';

const username = "Lan Anh";
const email = "lananh@gmail.com";
const birthday = "2000-07-20";
const description = "K9 class Playwright";
const country = "usa";

test('Register Page', async ({ page }) => {
  await test.step("Truy cập trang Playwright", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Nhấn Bài học 1: Register page", async () => {
    await page.locator("//a[@href ='01-xpath-register-page.html']").click();
  });

  await test.step("Điền đầy đủ thông tin", async ( )=> {
    await page.locator('//input[@id="username"]').fill(username);
    await page.locator('//input[@id="email"]').fill(email);
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="cooking"]').check();
    await page.locator("//select[@id ='interests']").selectOption(['technology', 'sports']);
    await page.selectOption('//select[@id="country"]', country);
    await page.locator('//input[@id="dob"]').fill(birthday);
    await page.locator('//input[@id="profile"]').setInputFiles(`lesson-5/avatar-anh-meo-cute-3.jpg`);
    await page.locator('//textarea[@id= "bio"]').fill(description);
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id= "newsletter"]').check();
    await page.locator('//span[@class= "slider round"]').check();
  });

  await test.step("Nhấn Register", async () => {
    await page.locator("//button[normalize-space()='Register']").click();
  });
})

