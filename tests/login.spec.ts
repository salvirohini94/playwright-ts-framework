import { test, expect } from '../fixtures/base';
import { user } from '../test-data/user';

test('login using the page object', async ({ loginPage, page }) => {
  await loginPage.login(user.email, user.password);     
  await expect(page).toHaveURL(/account/);
});