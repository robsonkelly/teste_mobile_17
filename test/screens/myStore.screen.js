class MyStoreScreen {
    get #myStoreLogo (){
        return $ ('~My store')
        }
    get #myStorename (){
        return $ ('id:toolbar_subtitle')
            }
    async getStorename(){
        return await this.#myStorename.getText()
        }
    async getStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
        }    
}


modulo.exports = new MyStoreScreen()