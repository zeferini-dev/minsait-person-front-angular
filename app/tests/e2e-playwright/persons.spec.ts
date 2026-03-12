import { test, expect } from '@playwright/test';

test.describe('Persons E2E (Playwright)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display persons page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Pessoas' })).toBeVisible();
  });

  test('should have link to add new person', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Nova Pessoa/i })).toBeVisible();
  });

  test('should navigate to new person form', async ({ page }) => {
    await page.getByRole('link', { name: /Nova Pessoa/i }).click();
    await expect(page).toHaveURL(/\/persons\/new/);
    await expect(page.getByText('Nome')).toBeVisible();
    await expect(page.getByText('E-mail')).toBeVisible();
  });
});
