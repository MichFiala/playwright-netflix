import { test, expect } from '@playwright/test';

const url:string = "https://www.w3schools.com/";

test('has title', async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle(/W3Schools/);
});

test('button - accept choices', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator("#accept-choices")).toBeVisible();

  await page.locator("#accept-choices").click();

  await expect(page.locator("#accept-choices")).not.toBeVisible();
});

test('button - learn html', async ({ page }) => {
  await page.goto(url);

  await expect(page.getByRole('link', {name: "Learn HTML"})).toBeVisible();
  
  page.getByRole('link', {name: "Learn HTML"}).click();

  await expect(page.getByRole('heading', { name: 'Easy Learning with HTML "Try it Yourself"'})).toBeVisible();
});

