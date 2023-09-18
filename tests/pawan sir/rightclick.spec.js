const{test,expect}=require('@playwright/test')
test('right click',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator('.context-menu-one.btn.btn-neutral').click({button:'right'})
    await page.waitForTimeout(5000)
})