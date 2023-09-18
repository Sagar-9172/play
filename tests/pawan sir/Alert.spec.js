const {test,expect}=require("@playwright/test")
test("confirm Handling",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
     page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        // await dialog.accept()
        await dialog.dismiss()  
     })
     await page.click('[onclick="myFunctionConfirm()"]')
     expect(page.locator('#demo')).toHaveText("You pressed Cancel!")
})
test("Prompt Handling",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.defaultValue()).toContain('Harry Potter')


    })
    await page.click('[onclick="myFunctionPrompt()"]')
})