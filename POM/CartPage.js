class CartPage{

constructor(page){
this.page=page
this.cartbtn='#cartur'
this.noOfProduct='//tbody[@id="tbodyid"]/tr/td[2]'
}


async gotoCart(){
    await this.page.locator(this.cartbtn).click()
}

async checkProductInCart(ProductName){
   const productincart= await this.page.$$(this.noOfProduct)
   for(const product of productincart){
    console.log(await product.textContent())
    if(ProductName===await product.textContent()){
        return true;
        break;
    }
   }
}
}
module.exports={CartPage}