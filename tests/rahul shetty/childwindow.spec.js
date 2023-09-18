const { test, expect } = require("@playwright/test")
test("child window", async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  const userName = page.locator('#username')
  const documentLink = page.locator('a[href*="documents-request"]')
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const [newPage] = await Promise.all(
    [
      context.waitForEvent('page'),
      documentLink.click()
    ]
  )
  const text = await newPage.locator('.red').textContent()
  //  console.log(text)
  const arrytext = text.split('@')
  //   console.log(arrytext)                 //[ 'Please email us at mentor','rahulshettyacademy.com with below template to receive response ']
  const domain = arrytext[1].split(" ")[0]
  //   console.log(domain)
  await page.locator('#username').type(domain)
  await page.pause()
  console.log(await userName.textContent())
})