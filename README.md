-La configuracion :

descarga Node, maven, jdk, visualstudio
configurar las variables de entorno
crear o importar proyecto.
Carpetas para la automatizacion feature, pages, step-definitions
Reporte de evidencias carpeta Test-results


- Plugins
  - https://plugins.jetbrains.com/plugin/7212-cucumber-for-java

comando de intalacion
-npx playwright install

comando para ejecutar tag
-npm run test-uat --tags="@creacion_empleado5"

CASOS DE PRUEBA: Herramienta Array Ortogonal
1. Acceso a OrangeHRM
    Escenario: Login en OrangeHRM
    Objetivo: Acceder a la plataforma de OrangeHRM.
    Pasos:
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio

2. Acceso a OrangeHRM
    Escenario: Login en OrangeHRM
    Objetivo: Acceder a la plataforma de OrangeHRM.
    Pasos:
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin124"
    Then el inicio de sesión no satisfactorio

3. Crear un nuevo empleado con detalles completos
    Escenario: Crear un nuevo empleado en OrangeHRM
    Objetivo: Crear un nuevo empleado en OrangeHRM con todos los datos obligatorios.
    Pasos:
    Then el inicio de sesión es satisfactorio
    Then me dirigo a PIM para crear empleado nuevo
    When ingreso los datos del empleado firstname "Yonella", middlename "Ingenieria" y lastname "Prueba" 
    Then doy click en guardar

4.  Crear un nuevo empleado con detalles completos
    Escenario: Crear un nuevo empleado en OrangeHRM
    Objetivo: Crear un nuevo empleado en OrangeHRM con todos los datos obligatorios.
    Pasos:
    Then el inicio de sesión es satisfactorio
    Then me dirigo a PIM para crear empleado nuevo
    When ingreso los datos del empleado firstname " ", middlename "Ingenieria" y lastname "Prueba" 
    Then doy click en guardar


5. Validar que el empleado ha sido creado correctamente y que aparece en la lista de empleados
    Escenario: Verificar empleado en la lista
    Objetivo: Validar que el empleado ha sido creado correctamente y aparece en la lista de empleados.
    Pasos: 
    Then me dirigo a PIM para buscar empleado "Yonella"
    Then muestra resultados 
