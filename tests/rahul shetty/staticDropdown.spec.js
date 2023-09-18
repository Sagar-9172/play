const { test, expect } = require("@playwright/test")

test("login and validate text", async ({ page }) => {
    const userName = page.locator('#username')
    const Password = page.locator('#password')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.type('rahulshettyacademy')
    await Password.type('learning')
    //blinking test
    const documentLink=page.locator('a[href*="documents-request"]')
    //drpdown
    await page.locator('select.form-control').selectOption('consult')
    //radiobutton
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await expect(page.locator('.radiotextsty').last()).toBeChecked()
    //or
    console.log(await page.locator('.radiotextsty').last().isChecked())//return boolen value
    //check boxses
    await page.locator('#terms').check()
    await expect(page.locator('#terms').last()).toBeChecked()
    await page.locator('#terms').uncheck()
    //assertion
    expect(await page.locator('#terms').last().isChecked()).toBeFalsy()

    await expect(documentLink).toHaveAttribute("class","blinkingText")
    await page.pause()

})