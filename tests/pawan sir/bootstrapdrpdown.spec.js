const { test, expect } = require("@playwright/test")
test("Bootstrap Dropdown", async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_3")
    await page.locator('.multiselect.dropdown-toggle').click()

    // //first way
    // const count=await page.locator('ul>li input')
    // await expect(count).toHaveCount(14)

    // second way
    // const count2=await page.$$('ul>li input')
    // await expect(count2.length).toBe(14)

    //third way
    const options = await page.$$('ul>li input')
    for (let option of options) {
        let value = await option.textContent()
        if (value.includes('Angular') || value.includes('Java')) {
            await option.click()
        }
    }
    await page.waitForTimeout(5000)
})