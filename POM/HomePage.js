class HomePage {
    constructor(page) {
        this.page = page
        this.productList='.row div div div h4 a'
        this.addCartbtn=".btn.btn-success.btn-lg"
        
    }


    async addProductToCart(ProductName){

        const productlist=await this.page.$$(this.productList)
        for(const product of productlist){
            if(ProductName === await product.textContent()){
                await product.click()
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
              await  dialog.accept()
            }

        })
        await this.page.locator(this.addCartbtn).click()
    }

}
module.exports={HomePage}