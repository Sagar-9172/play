const{test,expect} = require('@playwright/test')
test('ifram', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // const frame_1 = await page.frame('name')//ifname is present 
    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill('[name="mytext1"]',"welcome")
    await page.waitForTimeout(5000)
})
test.only('nested inner ifram', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill('[name="mytext3"]',"Hello")
    // nested
    const childFrames= await frame3.childFrames()
    await childFrames[0].locator('[class="AB7Lab Id5V1"]').first().check()
    await page.waitForTimeout(5000)
})