const{test,expect} = require('@playwright/test');

test('page screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
await page.screenshot({path:"tests/pawan sir/screenshots"+Date.now()+"Homepage.png"})
})
test('full page screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
await page.screenshot({path:"tests/pawan sir/screenshots"+Date.now()+"Fullpage.png",fullPage:true})
})
test.only('element page screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator('.product-thumb').nth(0).screenshot({path:"tests/pawan sir/screenshots"+Date.now()+"macbook.png"})
})
