import { expect, test } from '@playwright/test';

test('left-side navitem to route back to index', async ({ page }) => {
	await page.goto('/notes');

	await Promise.all([page.waitForNavigation(), page.locator("text=Julian's Page 🌴").click()]);
	expect(page.url()).toBe('http://localhost:3000/');
});

test('digital garden to be the index page', async ({ page }) => {
	await page.goto('/notes');

	expect(await page.innerHTML('h1')).toBe('Index');
});
