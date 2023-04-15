class productsDetales {

    get #DetalesMenu() { return $('id:productDetail_addMoreButton')     }
    get #DetalesShipping() { return $('//android.view.ViewGroup[1]')     }
    get #shippingtela() { return $('android=new UiSelector().text("Weight")')     }
    get #shippingtelaLength() { return $('android=new UiSelector().text("Length")')     }
    get #shippingtelaWidth() { return $('android=new UiSelector().text("Width")')    }
    get #shippingtelaHeight() { return $('android=new UiSelector().text("Height")')       }
    get #shippingClass() { return $('id:spinner_edit_text')       }
    get #shippingBack() { return $('~Navigate up')       }
    get #initialtela() { return $('android=new UiSelector().text("Jaqueta")')    }

    async accessMenu() {
        await this.#DetalesMenu.click()
        await this.#DetalesShipping.click()
        }


    async weightShipping(weight) {
        await this.#shippingtela.click()
        await this.#shippingtela.setValue(weight)
        }

    async lengthShipping(length) {
        await this.#shippingtelaLength.click()
        await this.#shippingtelaLength.setValue(length)
        }

    async widthShipping(width) {
        await this.#shippingtelaWidth.click()
        await this.#shippingtelaWidth.setValue(width)
        }

    async heightShipping(height) {
        await this.#shippingtelaHeight.click()
        await this.#shippingtelaHeight.setValue(height)
        }

    async class() {
        await this.#shippingClass.click()
        await this.#shippingBack.click()
        await this.#shippingBack.click()
        }

    async initial() {
        return await this.#initialtela.getText()
        
        }

}

module.exports = new productsDetales () 