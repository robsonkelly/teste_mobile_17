const homeScreen = require("../screrns/home.screen");
const loginScreen = require("../screens/login.screen");

let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let urlloja = 'http://lojaebac.ebaconline.art.br/'


describe('Access Admin Panel', () => {
    it('deve fazer login com sucesso', async () => {
      await homeScreen.goToLogin()
      await loginScreen.setStoreAddress(urlloja)
      await loginScreen.continue()
      await loginScreen.login(usuario, senha)
      await loginScreen.goTotwoFactorAuth()
      await loginScreen.twoFactorLogin (senha)

      expect (await MyStoreScreen.myStoreLogoIsDisplayed ()).toBeTruthy('EBAC - Shop')
      expect (await MyStoreScreen.getStorename()).toEqual('EBAC - Shop')

                             
    });


})