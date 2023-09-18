// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test';
test.use({
    viewport: { width: 1280, height: 720 },
  });
test('Datapicker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.frameLocator('#frame-one796456169').locator('[id="#RESULT_TextField-0"]').fill('hhhhhhh');
    await page.waitForTimeout(5000)
})
