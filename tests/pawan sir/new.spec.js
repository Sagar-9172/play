// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test';
test('Datapicker',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    await page.frameLocator('[width="650"]').locator('#i5').click()
    await page.waitForTimeout(5000)
    

})