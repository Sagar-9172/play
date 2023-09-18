import {test,expect} from '@playwright/test'


test('test1',async({page})=>{

await page.goto("https://www.demoblaze.com/")
await page.locator('#login2').click()
await page.locator('#loginusername').fill('Sagar9172')
await page.locator('#loginpassword').fill('Sagar@1996')
await page.locator('[onclick="logIn()"]').click()
await page.waitForSelector('.row div div div h4 a')
})