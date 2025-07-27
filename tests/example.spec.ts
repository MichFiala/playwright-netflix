import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.netflix.com/cz/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Netflix Česko/);
});

test('has button - get started', async ({ page }) => {
  await page.goto('https://www.netflix.com/cz/');

  
  await expect(page.getByRole('button', { name: 'Začít'})).toHaveCount(2);
});

test('account', async ({ page }) => {
  await page.goto('https://www.netflix.com/cz/');

  await expect(page.getByRole('button', { name: "Odmítnout"})).toBeVisible();
  
  page.getByRole('button', { name: "Odmítnout"}).click();

  await expect(page.getByRole('link', { name: "Účet"})).toBeVisible();

  page.getByRole('link', { name: "Účet"}).click();

  await expect(page.getByRole('button', { name: "Sign In"})).toBeVisible();
});

