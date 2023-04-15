const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const productsScreen = require("../screens/products.screen")
const productsPrice = require('../screens/price.screen')
const productsdeposit = require('../screens/deposit.screen')
const productsMoreDetails = require('../screens/productsDetales.screen')
const productsSearch = require('../screens/productsSearch.screen')



let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let title = 'Jaqueta'
let text = 'Jaqueta Rosa Pink Feminina'
let regular = '199,99'
let sale = '129,99'
let sku = 'ebac prova'
let quantity = '20'
let weight = '5'
let length = '60'
let width = '70'
let height = '40'
let iten = 'Jaqueta feminina'
let screen = 'Products'

describe('Faça login como gerente e registre um novo produto', () => {
             it('deve fazer login e regitar um produto', async () => {

        await homeScreen.goToLogin()
        await $('android.widget.EditText').setValue(url)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCre()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
        await productsScreen.getProductsButton()
        await productsScreen.addNewProducts()
        await productsScreen.menuNewProduct()
        await productsScreen.imageProduct()
        await productsScreen.imageProductGet()
        await productsScreen.imageProductSelect()
        await productsScreen.imageProductDone()
        await productsScreen.imageConfirmRetry()
        await productsScreen.productsTitleEdit(title)
        await productsScreen.productsDecribe()
        await productsScreen.productsDecribetext(text)
        await productsPrice.enterPrice()
        await productsPrice.regularPrice(regular)
        await productsPrice.enterSalePrice(sale)
        await productsPrice.productsTax()
        await productsdeposit.depositAccess()
        await productsdeposit.depositSku(sku)
        await productsdeposit.managerStock()
        await productsdeposit.confirmarBox(0)
        await productsdeposit.managerStockQuantidade(quantity)
        await productsDetales.accessMenu()
        await productsDetales.weightShipping(weight)
        await productsDetales.lengthShipping(length)
        await productsDetales.widthShipping(width)
        await productsDetales.heightShipping(height)
        await productsDetales.class()
        expect(await productsDetales.initial()).toEqual(iten)
        await productsSearch.confirm()
        await productsSearch.goTo()
        expect(await productsSearch.toConfirm()).toEqual(screen)
        await productsSearch.searchProducts(iten)
        await productsSearch.confirmProduct()
        expect(await productsSearch.final()).toEqual()



    })
})