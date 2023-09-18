const{test,expect}=require("@playwright/test")

test('first playwright test',async({browser,page})=>{
     //fresh browser 
    // const context =await browser.newContext()
    // const page =await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    // console.log(await page.title())
    // await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

    await page.locator('#username').type('rahulshettyacademy')
    await page.locator('#password').type('learning')
    // // await page.locator('#signInBtn').click()
    await page.click('#signInBtn')

})
test.only('second playwright test validate incorrect username password',async({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await page.locator('#username').type('rahulshetty')
   await page.locator('#password').type('learning')
   await page.click('#signInBtn')
   console.log(await page.locator("[style*=none]").textContent())
   await expect(page.locator("[style*=none]")).toContainText('Incorrect')

})