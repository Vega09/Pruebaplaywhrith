Feature: Creación de Empleado

@creacion_empleado1
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio
   
@creacion_empleado2
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin124"
    Then el inicio de sesión es satisfactorio

@creacion_empleado3
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio
    Then me dirigo a PIM para crear empleado nuevo
    When ingreso los datos del empleado firstname "Yonella", middlename "Ingenieria" y lastname "Prueba" 
    Then doy click en guardar
  
@creacion_empleado4
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio
    Then me dirigo a PIM para crear empleado nuevo
    When ingreso los datos del empleado firstname "  ", middlename "Ingenieria" y lastname "Prueba" 
    Then doy click en guardar

@creacion_empleado5
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio
    Then me dirigo a PIM para crear empleado nuevo
    When ingreso los datos del empleado firstname "Yonella", middlename "Ingenieria" y lastname "Prueba" 
    Then doy click en guardar  
    Then me dirigo a PIM para buscar empleado "Yonella"
    Then muestra resultados 



   # Examples:
   #    | FIRSTNAME | MIDDLENAME | LASTNAME  |
   #    | Yonella   |Ingenieria  | Prueba    | 
