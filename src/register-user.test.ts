import { expect, test } from "@playwright/test";

test("register user", async ({ page }) => {
  // 登録ページを開く
  await page.goto("http://localhost:3000/register-user");

  // フォームに入力する
  await page.fill("[data-test='emailInput']", "foo@example.com");
  await page.fill("[data-test='nameInput']", "foo");

  // 登録ボタンをクリックする
  await page.click("[data-test='submitButton']");

  // ユーザー登録完了ページが表示されることを確認する
  await expect(page.locator("[data-test='myPagePage']")).toHaveCount(1);
});
