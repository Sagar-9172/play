// const {test,expect}=require ("@playwright/test")
//             or 
import {test,expect} from '@playwright/test'
test('locators',async({page})=>{
//visit the url
await page.goto('https://demoblaze.com/')
// click on login button property
//await page.locator("id=login2").click()
await page.click("id=login2")
//username

})

