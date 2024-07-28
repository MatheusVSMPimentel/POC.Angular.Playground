import {browser, by, element} from 'protractor'

export class AppHomePage{
    navigato(){
        browser.waitForAngularEnabled(false);
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText(){
        return element(by.xpath('/html/body/app-root/app-home/header/div/div/div[2]/h1')).getText() as Promise<string>;
    }
}