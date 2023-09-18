const {test,expect}=require("@playwright/test")
test("Autosujjest Dropdown",async({page})=>{
  
    await page.goto('https://www.redbus.in/')

     await page.locator('#src').fill('Delhi')
     await page.waitForTimeout(5000)
     const texts =  page.locator('.sc-iwsKbI div text');
     for(let i =0; i < await texts.count(); i++){
        let text = await texts.nth(i).textContent();
        console.log(text);
     }
    //  console.log(text)
     await page.waitForTimeout(5000)
})

// test('user can click multiple li', async ({ page }) => {
//     const items = page.locator('ul > li');
//     for (let i = 0; i < await items.count(); i++) {
//       await items.nth(i).click();
//     }
//   })