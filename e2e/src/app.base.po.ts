import {browser, by, element, ExpectedConditions} from 'protractor'

export abstract class AppBasePage{
    constructor(){
        browser.driver.manage().window().maximize();
    }

     navigateToHome(){
        browser.waitForAngularEnabled(false);
        return  browser.get(browser.baseUrl);
    }

     navigateByUrl(url : string){
        return  browser.get(url) as Promise<any>;
    }

    navigateByLink(link: string){
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.linkText(link)))).then(()=>{
            return element(by.linkText(link)).click();
        })
    }

    getElementByXpath(xpath: string){
        return element(by.xpath(xpath));
    }
    getElementById(Id: string){
        return element(by.id(Id));
    }
    wait = (miliseconds: number) =>{
        browser.sleep(miliseconds);
    }
}