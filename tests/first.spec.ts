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
test('login with the demo account', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
  await page.getByTestId('password').fill('welcome01');
  await page.getByTestId('login-submit').click();

  await expect(page).toHaveURL(/account/);
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});