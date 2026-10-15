import { test, expect } from '@playwright/test';

test('login page looks the same', { tag: '@visual' }, async ({ page }) => {
  await page.goto('/auth/login');
    await expect(page.getByTestId('login-submit')).toBeVisible();
  await expect(page).toHaveScreenshot('login-page.png'); 
});

test('home page looks the same', { tag: '@visual' }, async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('product-name').first()).toBeVisible();

  await expect(page).toHaveScreenshot('home-page.png', {
    fullPage: true,
    mask: [page.locator('.card')],          
    maxDiffPixelRatio:0.02,              
  });
});