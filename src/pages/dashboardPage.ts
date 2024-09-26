import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

export default class DashboardPage{
       private Elements = {
        dashboardTitle: "//header/div[1]/div[1]/span[1]/h6[1]",
        optionTitle: "//body[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]",
        pinTitle: "//div[@class='oxd-topbar-header-title']",
        add: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']",
        addtitle: "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/h6[1]",
        firstnameadd: "//input[@placeholder='First Name']",
        middlenameadd: "//input[@placeholder='Middle Name']",
        lastnameadd: "//input[@placeholder='Last Name']",
        botonguardar: "//button[@type='submit']",
        guardado: "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h6[1]",
        listar: "//input[@placeholder='Type for hints...']",
        botonbuscar: "//button[@normalize-space='Search']",
        resultado: "//span[@class='oxd-text oxd-text--span']",


    }     

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
    }

    async optionPIM(){
        await global.page.click(this.Elements.optionTitle);
        await global.page.waitForSelector(this.Elements.optionTitle);
        await expect(global.page.locator(this.Elements.pinTitle)).toBeVisible();   
    }

    async addempleado(firstname: string, middlename: string, lastname: string) {
        await global.page.click(this.Elements.add);
        await expect(global.page.locator(this.Elements.addtitle)).toBeVisible();
        setDefaultTimeout(3000),
        await global.page.type(this.Elements.firstnameadd, firstname);
        await global.page.type(this.Elements.middlenameadd, middlename);
        await global.page.type(this.Elements.lastnameadd, lastname);
        setDefaultTimeout(3000);
    
    }

    async guardar(){
    await global.page.click(this.Elements.botonguardar);
    await expect(global.page.locator(this.Elements.botonguardar)).toBeVisible();
    await global.page.waitForSelector(this.Elements.guardado);

  }

  async buscarempleado(empleado:string){
    await global.page.click(this.Elements.optionTitle);
    setDefaultTimeout(3000);
    await global.page.click(this.Elements.listar,empleado).toBeVisible();
    setDefaultTimeout(3000);
    await global.page.click(this.Elements.botonbuscar).toBeVisible();
   
}
  async resultado() {
    await global.page.waitForSelector(this.Elements.resultado);
}

}

