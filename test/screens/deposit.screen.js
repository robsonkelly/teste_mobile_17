class productsdeposit {

    get #depositMenu() { return $('//android.view.ViewGroup[3]/android.view.ViewGroup') }
    get #depositSku() { return $('id:edit_text') }
    get #depositManageStock() { return $('id:manageStock_switch') }
    get #depositQuantity() { return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText') }
    get #depositChecar() { return $('id:product_stock_quantity') }
    get #depositExit() { return $('~Navigate up') }

    async depositAccess() {
            await this.#depositMenu.click()
            
        }

    async depositSku(sku) {
        await this.#depositSku.click()
        await this.#depositSku.setValue(sku)
        return await this.#depositSku.hideKeyboard()
    }

    async managerStock() {
        await this.#depositManageStock.click()
    }

    async confirmarBox() {
        return await this.#depositChecar.getText()
    }

    async managerStockQuantidade(quantity) {
        await this.#depositQuantity.click()
        await this.#depositQuantity.setValue(quantity)
        await this.#depositQuantity.hideKeyboard()
        await this.#depositExit.click()
    }

}

module.exports = new productsdeposit()