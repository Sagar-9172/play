const { test, expect } = require("@playwright/test")

test("login and validate text", async ({page}) => {
    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("http://google.com")
    // await page.goBack()
    // await page.goForward()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
    await page.pause()
    //alert
    // page.on('dialog',dialog=>dialog.accept())//for ok
    // await page.locator('#confirmbtn').click()

    page.on('dialog',dialog=>dialog.dismiss())//for cancle
    await page.locator('#confirmbtn').click()

    //mousehover
    await page.locator('#mousehover').hover()


    //




})