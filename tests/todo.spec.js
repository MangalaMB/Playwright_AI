// @ts-check
import { test, expect } from '@playwright/test';

test('adds a todo item to the list', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });
  await todoInput.fill('Test Playwright MCP');
  await todoInput.press('Enter');

  await expect(
    page.getByRole('listitem').filter({ hasText: 'Test Playwright MCP' }),
  ).toBeVisible();
});
