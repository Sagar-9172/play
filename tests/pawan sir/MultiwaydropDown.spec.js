import {test,expect} from '@playwright/test'
test('dropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//Multiple way to select drop down
// await page.locator('#country').selectOption('India')
// await page.locator('#country').selectOption({label:'India'}
// await page.locator('#country').selectOption({value:'Uk'})
// await page.locator('#country').selectOption({index:2})
await page.selectOption('#country','India')
await page.waitForTimeout(5000)
})