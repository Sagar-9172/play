const {test,expect}=require('@playwright/test')


test('end to end testing',async({browser,page})=>{
    const context =await browser.newContext()
    const newpage=await context.newPage()   
    const products=await page.locator('.card-body')
    const productname="zara coat 3"
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('sagar56@gmail.com')
    await page.locator('#userPassword').fill('sagar@1998')
    const count=await products.count()

    for(let i=0;i<count;i++){

        if(await products.nth(i).locator('b').textContent()===productname){
            //add to cart
           await products.nth(i).locator("text= Add To Cart").click()
        }

    }

    

})
