 const{test,expect} = require('@playwright/test')
 import {Loginpage} from '../../POM/Loginpage'
 import { HomePage } from '../../POM/HomePage'
 import {CartPage} from '../../POM/CartPage'
const data = require('./../../data/helper.json')

 test('Login page',async({page})=>{

   //Login
    let loginpage = new Loginpage(page)
    
    await loginpage.VisitPage('/')
    await loginpage.login('Sagar9172','Sagar@1996')
    await page.waitForTimeout(3000)

    //homePage

    const home = new HomePage(page)

      await home.addProductToCart('Nokia lumia 1520')
     
      await page.waitForTimeout(3000)

      //cart

      const cart=new CartPage(page)
      await cart.gotoCart()
      await page.waitForTimeout(3000)
    const status=  await cart.checkProductInCart("Nokia lumia 1520")
     expect(status).toBe(true)


 })