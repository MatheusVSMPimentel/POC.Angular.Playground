import { browser, logging } from 'protractor'
import { AppRegisterPage } from './app.register.po';

describe('Angular Playground App', ()=>{
    let page : AppRegisterPage;

    beforeEach(()=>{
        page = new AppRegisterPage;
    });

    it('Should navigate from home to register page', async ()=>{
        page.startNavigation();
        expect(await page.getRegisterTitle()).toEqual('Demo Register');
    })

    it('Should fill all form fields with success.',async ()=>{
        page.nameField.sendKeys('Matheus Pimentel');
        page.documentField.sendKeys('90739582020');
        page.emailField.sendKeys('teste@teste.com');
        page.passwordField.sendKeys('Teste@123');
        page.passwordConfirmField.sendKeys('Teste@123');

        page.registerButton.click();
        page.wait(1000);
        
        expect(await page.getFormResult()).toContain('"name":"Matheus Pimentel"')
    })

    it('Wrong password confirm should show error message.',async ()=>{
        page.nameField.sendKeys('Matheus Pimentel');
        page.documentField.sendKeys('90739582020');
        page.emailField.sendKeys('teste@teste.com');
        page.passwordField.sendKeys('Teste@123');
        page.passwordConfirmField.sendKeys('Teste@1w23');

        page.registerButton.click();
        page.wait(1000);
        
        expect(await page.getPasswordError()).toContain('The password confirmation field must match the password field.')
    })


    afterEach(async ()=>{
        const logs = await browser.manage().logs().get(logging.Type.BROWSER)
        expect(logs).not.toContain(jasmine.objectContaining({
            level : logging.Level.SEVERE 
        } as logging.Entry));
    })
})