import { browser, by, element } from 'protractor'
import { AppBasePage } from '../app.base.po';

export class AppRegisterPage extends AppBasePage {

    nameField = this.getElementById('name');
    documentField = this.getElementById('document');
    emailField = this.getElementById('email');
    passwordField = this.getElementById('password');
    passwordConfirmField = this.getElementById('passwordConfirm');
    registerButton = this.getElementById('register');

    constructor() {
        super();

    }

     navigateToRegister() {
        this.navigateByUrl('/register');
    }

     navigateToRegisterByLink() {
         this.navigateByLink('Register');
    }

     startNavigation() {
         this.navigateToHome();
         this.navigateToRegisterByLink();
    }

    getRegisterTitle() {
        return this.getElementByXpath('/html/body/app-root/app-registration/div/h4').getText();
    }

    getFormResult(){
        return this.getElementByXpath('/html/body/app-root/app-registration/div/form/div[7]/div/p[4]').getText()
    }

    getPasswordError(){
        return this.getElementByXpath('/html/body/app-root/app-registration/div/form/div[5]/div/span/p').getText()
    }
}