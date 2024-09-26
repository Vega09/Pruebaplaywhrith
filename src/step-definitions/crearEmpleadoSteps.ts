import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('que estoy en la página de OrangeHRM', async ()=> {
     await loginPage.navigateToOrangePage();
})

When('ingreso mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})

Then('el inicio de sesión es satisfactorio', async ()=> {
    await dashboardPage.loginSuccess();
})

Then('me dirigo a PIM para crear empleado nuevo', async ()=> {
    await dashboardPage.optionPIM();
})

When('ingreso los datos del empleado firstname {string}, middlename {string} y lastname {string}', async (firstname, middlename, lastname) => {
    await dashboardPage.addempleado(firstname, middlename, lastname);
})

Then('doy click en guardar', async () => {
    await dashboardPage.guardar();
})

Then('me dirigo a PIM para buscar empleado {string}', async (empleado)=> {
    await dashboardPage.buscarempleado(empleado);
})

Then('muestra resultados', async () => {
    await dashboardPage.resultado();
})







// Then('ingreso los datos del empleado ', async function (FIRSTNAME, MIDDLENAME, LASTNAME) {
//     await dashboardPage.addempleado(FIRSTNAME, MIDDLENAME, LASTNAME);
// })




