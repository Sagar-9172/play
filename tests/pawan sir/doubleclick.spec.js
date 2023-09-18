const{test,expect}=require('@playwright/test')
test('right click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[ondblclick="myFunction1()"]').dblclick()
    const fild=page.locator('#field2')
    await expect(fild).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
})
