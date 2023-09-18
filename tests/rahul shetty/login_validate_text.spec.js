const { test, expect } = require("@playwright/test")

test("login and validate text", async ({ page }) => {
    const userName = page.locator('#username')
    const Password = page.locator('#password')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.type('rahulshettyacademy')
    await Password.type('learning')
    await Promise.all(
        [
            page.waitForNavigation(),
            page.click('#signInBtn')
        ]
    )
    // console.log(await page.locator('.card-body a').first().textContent()) 
    // await page.waitForLoadState('domcontentloaded')                              //if it is not working follow the promise.all()//page no 9
    const titles = (await page.locator('.card-body a').allTextContents())
    console.log(titles)
})