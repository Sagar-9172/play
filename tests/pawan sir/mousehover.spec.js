const{test,expect}=require('@playwright/test')
test('mouse hover action',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator('[class="nav-link dropdown-toggle"]').nth(0).hover()
    await page.waitForTimeout(5000)
})