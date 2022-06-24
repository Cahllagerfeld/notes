import { expect, test } from '@playwright/test';

test('navigate via the digital garden tile', async ({ page }) => {
	await page.goto('/');

	await Promise.all([page.waitForNavigation(), page.locator("img[alt='Test']").click()]);
	expect(page.url()).toContain('/notes');
});

test('digital garden to be the index page', async ({ page }) => {
	await page.goto('/notes');

	expect(await page.innerHTML('h1')).toBe('Index');
});

test('left-side navitem to route back to index', async ({ page }) => {
	await page.goto('/notes');

	await Promise.all([page.waitForNavigation, page.locator("text=Julian's Page 🌴").click()]);
	expect(page.url()).toBe('http://localhost:3000/');
});
