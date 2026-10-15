import { test, expect } from '@playwright/test';

test('login page looks the same', { tag: '@visual' }, async ({ page }) => {
  await page.goto('/auth/login');
    await expect(page.getByTestId('login-submit')).toBeVisible();
  await expect(page).toHaveScreenshot('login-page.png'); 
});