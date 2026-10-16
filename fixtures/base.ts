import { test as base, expect, Page } from '@playwright/test';

export const test = base.extend<{ loggedInPage: Page; homePage: Page }>({ 
  loggedInPage: async ({ page }, use) => {
    await page.goto('/auth/login');
    await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
    await page.getByTestId('password').fill('welcome01');
    await page.getByTestId('login-submit').click();
    await expect(page).toHaveURL(/account/);

    await use(page); 
    
  },
  homePage: async ({ page }, use) => {
    await page.goto('/');
    await expect(page.getByTestId('product-name').first()).toBeVisible();
    await use(page);
  },
});

export { expect };