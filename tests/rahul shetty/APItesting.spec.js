import { test, expect, request } from "@playwright/test"
const loginPayload = { userEmail: "sagar56@gmail.com", userPassword: "Sagar@1998" }
let tokan;
test.beforeAll(async () => {
    const apiContext = await request.newContext()
    const loginresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        })
    expect(loginresponse.ok()).toBeTruthy()
    const loginResponseJson = await loginresponse.json()
    tokan = loginResponseJson.token
    console.log(tokan)
})
test("API Testing", async ({ page }) => {
    // console.log(tokan)
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    },tokan)
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.waitForTimeout(5000)
   await expect(page.locator('div > h3')).toHaveText("Automation")



   
})



