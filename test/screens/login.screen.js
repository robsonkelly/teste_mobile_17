class LoginScreen {
    get #storeAddress () { return $ ('//android.widget.EditText') }
    get #continue() { return $ ('id:bottom_button') }
    get #continueCredentials() { return $ ('id:login_site_creds') }
    get #username() { return $ ('android=new UiSelector().text ("Username")') }
    get #password() { return $ ('android=new UiSelector().text ("Password")') }
    get #twoFactorPassword() {return $('id:login_enter_password')}
 
    async setStoreAddress (url){
        this.#storeAddress.setValue(url)
        }

    async continue() {
        await this.#continue.click()
    }   
    async continue() {
        await this.#continueCredentials.click()
    }
    async login(username, password ) {
        await this.#username.setValue (username)
        await this.#password.setValue (password)
        await this.#continue.click()
    }
    async goToTwoFactorauth () {
        await this.#twoFactorPassword.click()
    }
    async twoFactorLogin (password) {
        await this.#password.setValue(password) 
        await this.#continue.click()

}
}

modulo.exports = new LoginScreen()