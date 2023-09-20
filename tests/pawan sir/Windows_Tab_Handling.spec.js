const{test,expect,chromium}=require('@playwright/test')


test('handling window',async()=>{
const browser=await chromium.launch()
const context=await browser.newContext()

const page1=await context.newPage()
const page2=await context.newPage()

const allPages=context.pages()
console.log(allPages.length)

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page1).toHaveTitle('OrangeHRM')

await page2.goto('https://www.orangehrm.com/')
await expect(page2).toHaveTitle('OrangeHRM HR Software | OrangeHRM')


})

test.only('multiple pages',async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    
    const page1=await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')
    
    
    const pagePromises=context.waitForEvent('page')
    await page1.getByText('OrangeHRM, Inc').click()
    
    const newPage=await pagePromises
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM')

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()

    
    
    })