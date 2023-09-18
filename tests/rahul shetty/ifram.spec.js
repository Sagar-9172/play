const {test,expect}=require('@playwright/test')

test('iframe',async({page})=>{
    await page.goto("http://www.webdriveruniversity.com/IFrame/index.html")
    const framePage =page.frameLocator('#frame');
    // const hometext=await framePage.locator('[class="active"]').nth(1).textContent();
    // console.log(hometext)

    await framePage.locator('[href="products.html"]').click()
    await framePage.locator('#container-special-offers').click()
    await framePage.locator('.btn.btn-default').last().click()
    await page.pause()



})