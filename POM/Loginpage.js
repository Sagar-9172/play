class Loginpage {
    constructor(page) {
        this.page = page
        this.loginbtn2 = '#login2'
        this.username = '#loginusername'
        this.password = '#loginpassword'
        this.loginbtn = '[onclick="logIn()"]'

    }
    async VisitPage() {
        await this.page.goto("https://www.demoblaze.com/")
    
    }
    async login(username, password) {
        await this.page.locator(this.loginbtn2).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbtn).click()

    }
}
module.exports={Loginpage}

