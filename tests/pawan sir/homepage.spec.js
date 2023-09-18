const {test,expect}=require("@playwright/test")
test("hohe page",async({page})=>{
    await page.goto("https://demoblaze.com/");
    const pageTitle=page.title();
    console.log(pageTitle)
    await expect(page).toHaveTitle("STORE")
    const pageurl=page.url();
    await expect(page).toHaveURL("https://demoblaze.com/")
})