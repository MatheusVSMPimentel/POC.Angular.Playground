import { browser, logging } from 'protractor'
import { AppHomePage } from './app.home.po';

describe('Angular Playground App', ()=>{
    let page : AppHomePage;

    beforeEach(()=>{
        page = new AppHomePage;
    });

     it('Should diplay welcome message',async ()=>{
        page.navigateToHome();
        expect(await page.getTitleText()).toEqual('Advanced Angular development');
    });

    afterEach(async ()=>{
        const logs = await browser.manage().logs().get(logging.Type.BROWSER)
        expect(logs).not.toContain(jasmine.objectContaining({
            level : logging.Level.SEVERE 
        } as logging.Entry));
    })
})