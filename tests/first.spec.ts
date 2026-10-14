import { test, expect } from '@playwright/test';

test('practice site opens', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');   
  await expect(page).toHaveTitle(/Practice Software Test/);                    
});

test('search for a product', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const searchBox = page.locator('[data-test="search-query"]');
  const firstProduct = page.locator('[data-test="product-name"]').first();

  await searchBox.fill('hammer');
  await searchBox.press('Enter');
  await expect(firstProduct).toContainText('Hammer');
});
test('open the sign in page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Your email').fill('test@example.com');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
});