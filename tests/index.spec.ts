import { expect, test } from '@playwright/test';

test('navigate via the digital garden tile', async ({ page }) => {
	await page.goto('/');

	await Promise.all([page.waitForNavigation(), page.locator("img[alt='Test']").click()]);
	expect(page.url()).toContain('/notes');
});
