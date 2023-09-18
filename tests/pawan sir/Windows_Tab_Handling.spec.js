const{test,expect,chromium}=require('@playwright/test')


test('handling window',async()=>{

const browser=await chromium.launch()
const context=await browser.newContext()

const page1=await context.newPage()
const page2=await context.newPage()

const allPages=context.pages()
console.log(allPages)


    
})