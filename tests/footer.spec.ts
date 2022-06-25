import { expect, test } from '@playwright/test';

test('twitter footer link', async ({ page }) => {
	await page.goto('/');

	await Promise.all([page.waitForNavigation(), page.locator('i').nth(1).click()]);
	expect(page.url()).toContain('twitter.com/CahlLagerfeld');
});

test('github footer link', async ({ page }) => {
	await page.goto('/');

	await Promise.all([page.waitForNavigation(), page.locator('i').nth(2).click()]);
	expect(page.url()).toContain('github.com/Cahllagerfeld');
});
