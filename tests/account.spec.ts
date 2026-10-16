import { test, expect } from '../fixtures/base';                              

test('account page shows My account', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByTestId('page-title')).toHaveText('My account');
});