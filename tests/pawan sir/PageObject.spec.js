 const{test,expect} = require('@playwright/test')
 import {Loginpage} from '../../POM/Loginpage'
 import { HomePage } from '../../POM/HomePage'


 test('Login page',async({page})=>{

   //Login
    let loginpage = new Loginpage(page)
    await loginpage.VisitPage()
    await loginpage.login('Sagar9172','Sagar@1996')
    await page.waitForTimeout(3000)

    //homePage

    const home = new HomePage(page)

      await home.addProductToCart('Nokia lumia 1520')
      
      await page.waitForTimeout(5000)

 })