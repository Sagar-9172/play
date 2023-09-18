const{test,expect}=require('@playwright/test')
let page
test.beforeEach(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.fill('[name="username"]','Admin')
    await page.fill('[name="password"]','admin123')
    await page.locator('[type="submit"]').click()
})
test.afterEach(async()=>{
    await page.locator('.oxd-userdropdown-icon').click()
    await page.locator('.oxd-dropdown-menu').last().click()
})
test('Hooks',async()=>{
    const Dashboard=page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(Dashboard).toHaveText('Dashboard')
})
test('hh',async()=>{
    const count=page.locator('.oxd-grid-3.orangehrm-dashboard-grid div')
    await expect(count).toHaveCount(90)
})