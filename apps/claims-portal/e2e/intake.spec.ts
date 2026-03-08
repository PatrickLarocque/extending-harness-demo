import { expect, test } from '@playwright/test';

test('shows the intake form', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Start a claim intake' })).toBeVisible();
  await page.screenshot({
    path: `e2e/screenshots/${testInfo.project.name}-empty-form.png`,
    fullPage: true
  });
});

test('surfaces validation before submit', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.getByLabel('Claimant name').focus();
  await page.getByLabel('Email').focus();
  await page.getByLabel('Policy number').focus();
  await page.getByLabel('Incident date').focus();
  await page.getByRole('button', { name: 'Create intake' }).focus();

  await expect(page.getByText('Claimant name is required.')).toBeVisible();
  await page.screenshot({
    path: `e2e/screenshots/${testInfo.project.name}-validation.png`,
    fullPage: true
  });
});
