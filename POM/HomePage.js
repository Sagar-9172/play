class HomePage {
    constructor(page) {
        this.page = page
        this.productList='.row div div div h4 a'
        this.cartbtn='[onclick="addToCart(3)"]'
    }


    async addProductToCart(ProductName){

        const productlist=await this.page.locator(this.productList).text
        console.log(productlist.allTextcontent())

    //     for(const product of productList){
    //         if(ProductName === await product.textContent()){
    //             await product.click()
    //             break;
    //         }
    //     }
    //     await this.page.waitForTimeout(5000)
    //     await this.page.locator(this.cartbtn).click()
    }
}
module.exports={HomePage}