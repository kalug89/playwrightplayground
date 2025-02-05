import { test, expect } from "@playwright/test";

var url = "https://practice.expandtesting.com";

test.describe("Web inputs sub-page tests", () => {
  test("simple test cases", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link").filter({ hasText: "Web Inputs" }).click();

    const expectedUrl = page.url();
    expect(expectedUrl).toBe(`${url}/inputs`);

    await page
      .getByRole("heading")
      .filter({ hasText: "Web inputs page for Automation Testing Practice" });

    const elements = [
      page.locator("#input-number"),
      page.locator("#input-text"),
      page.locator("#input-password"),
      page.locator("#input-date"),
    ];

    for (const element of elements) {
      await expect(element).toBeVisible();
    }
  });
});
