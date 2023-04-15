const { join } = require ('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.specs.js'
            ],
            framework: 'mocha'
            capabilities:[{
                "platformName": "Android",
                "platformVersion": "9.0",
                "deviceName": "teste-mob",
                "automationName": "UiAutomator2",
                "app": join(process.cwd(), "./app/android/WooCommerce_11.9_Apkpure.apk"),
                "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
            }],
            waitForTimeout: 20000,
            mocha0pts: {
                timeout: 30000
            },
            reporters: ['spec']
}