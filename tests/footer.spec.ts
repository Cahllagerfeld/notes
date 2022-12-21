import { expect, test } from '@playwright/test';

test('twitter footer link', async ({ page }) => {
	await page.goto('/');

	await page.getByTestId('twitter-footer-link').click();
	expect(page.url()).toContain('twitter.com/CahlLagerfeld');
});

test('github footer link', async ({ page }) => {
	await page.goto('/');

	await page.getByTestId('github-footer-link').click();
	expect(page.url()).toContain('github.com/Cahllagerfeld');
});
