const{test,expect}=require('@playwright/test')
test('Drag n Drop Action',async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome =page.locator('#box6')
    const itly=page.locator('#box106')
    //Approch 1
    // await rome.hover()
    // await page.mouse.down()
    // await itly.hover()
    // await page.mouse.up()
    // await page.waitForTimeout(5000)

      //Approch 2
      await rome.dragTo(itly)
      await page.waitForTimeout(5000)
})