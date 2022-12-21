import { expect, test } from '@playwright/test';

test('left-side navitem to route back to index', async ({ page }) => {
	await page.goto('/notes/index');

	await Promise.all([page.waitForNavigation(), page.locator("text=Julian's Page 🌴").click()]);
	expect(page.url()).toBe('http://localhost:4173/');
});
