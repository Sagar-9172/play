// npm init==>package.json file creat
// npm install playwright@latest
// const{test,expect}=require('@playwright/test') 
import {test,expect} from '@playwright/test'
import { timeout } from '../../playwright.config'

test('test1',async({page})=>{

// await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.goto("https://www.demoblaze.com/")
await page.locator('#login2').click()
await page.locator('#loginusername').fill('Sagar9172')
await page.locator('#loginpassword').fill('Sagar@1996')
await page.locator('[onclick="logIn()"]').click()
const text=await page.locator('.row div div div h4 a')
for(let i =0; i<await text.count(); i++){
    console.log(await text.textContent())
}







//first way
// await page.locator('//input[@name="username"]').fill('Admin')
// await page.locator('//input[@name="password"]').fill('admin123')
// await page.locator('[type="submit"]').click()

//second way
// await page.fill('//input[@name="username"]','Admin')
// await page.fill('//input[@name="password"]','admin123')
// await page.locator('[type="submit"]').click()
await page.waitForTimeout(5000)

})




