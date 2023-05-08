
## Cypress 

Cypress es un framework de pruebas automatizadas para aplicaciones web. Se utiliza comúnmente para realizar pruebas de extremo a extremo en aplicaciones web. Permite simular interacciones de usuarios, como hacer clic en botones, ingresar texto en campos de formulario y navegar por diferentes páginas. Además, Cypress proporciona una amplia gama de funciones y comandos que facilitan la escritura de pruebas robustas y mantenibles.


## Aplicación Objetivo de pruebas

- Ghost v 5.41.0 

 

## Librerías utilizadas: 

- Node v14.21.3 

- cypress v16.20.0



## Funcionalidades probadas 

- Crear cuenta nueva

- Crear Post nuevo

- Personalizar información general

- Importar miembros

- Editar información de perfil 

 

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Kraken 

 

### Preparación del ambiente 

1. Descargar el repositorio https://github.com/danierazome/Pruebas-automatizadas de la rama master 

2. Abrir la carpeta kraken_tests/cypress_tests/ con el IDE de su gusto 

3. Ejecutar en la raíz del proyecto:  npm install cypress --save-dev para descargar las librerías requeridas por cypress 

### Ejecución de pruebas 

1. Correr Ghost localmente 

2. Es importante saber que no se debe tener cuenta creada, ya que las pruebas hacen la creación automática de esta con los parametros que se encuentran en los scripts de cada uno de los escenariso de prueba. En caso de tener una cuenta anteriormente creada, es necesario borrar la base de datos del ghost de la siguiente forma:

  - Pararse en el directorio de la aplicación ghost
  - ejecutar el comando rm -f content/data/ghost-local.db
 

## FUNCIONALIDAD 1: CREACIÓN DE CUENTA DE USUARIO GHOST

### Escenario: 01-Crear cuenta de Ghost  (**NEGATIVO**) datos vacios. 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los dos campos, y se procede a crear el post

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 191436](https://user-images.githubusercontent.com/124220935/236719462-433a888e-2aa0-4d5a-82bf-ca3326dd1364.png)



 
### Escenario: 02-Crear cuenta de Ghost  (**NEGATIVO**) formato de correo incorrecto. 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los dos campos, y se procede a crear el post

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 192521](https://user-images.githubusercontent.com/124220935/236719668-6651db8b-dfe2-44ee-8503-499ad77c7f4b.png)




### Escenario: 03-Crear cuenta de Ghost  (**NEGATIVO**) formato de contraseña incorrecto. 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los dos campos, y se procede a crear el post

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 192602](https://user-images.githubusercontent.com/124220935/236719899-9e49c7f5-b913-47b9-b6fd-bce9898f74bf.png)




### Escenario: 04-Crear cuenta de Ghost  (**POSITIVO**). 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los dos campos, y se procede a crear el post

se obtura el botón de submit y se obtiene un resultado POSITIVO, logrando entrar a la aplicación.

![Captura de pantalla 2023-05-07 192802](https://user-images.githubusercontent.com/124220935/236720027-001785e3-572c-46ff-9112-c77843018c85.png)



## FUNCIONALIDAD 2: CREACIÓN DE CUENTA UN POST EN GHOST

### Escenario: 01-Crear un post en ghost con solo texto  (**POSITIVO**). 

se ingresa a la página: http://localhost:2369/ghost/#/singin, logueando el usuario

se dirige a la pagina http://localhost:2369/ghost/#/posts para crear el post

Se llenan los dos campos, y se procede a crear el post

se obtura el botón de publish y se obtiene un resultado POSITIVO

![Captura de pantalla 2023-05-07 205801](https://user-images.githubusercontent.com/124220935/236720438-65ac9eed-1839-4d33-86d4-2807f217fd9c.png)




### Escenario: 02-Crear un post en ghost importando imagen local  (**POSITIVO**). 

se ingresa a la página: http://localhost:2369/ghost/#/singin, logueando el usuario

se dirige a la pagina http://localhost:2369/ghost/#/posts para crear el post

Se llenan los dos campos, y se procede a crear el post importando la imagen local

se obtura el botón de publish y se obtiene un resultado POSITIVO

![Captura de pantalla 2023-05-07 210133](https://user-images.githubusercontent.com/124220935/236720537-d620b95b-59c5-4cb8-a03a-35622f978d04.png)


### Escenario: 02-Crear un post en ghost importando imagen del unsplash (**POSITIVO**). 

se ingresa a la página: http://localhost:2369/ghost/#/singin, logueando el usuario

se dirige a la pagina http://localhost:2369/ghost/#/posts para crear el post

Se llenan los dos campos, y se procede a crear el post importando la imagen del unsplash

se obtura el botón de publish y se obtiene un resultado POSITIVO

![Captura de pantalla 2023-05-07 210315](https://user-images.githubusercontent.com/124220935/236720678-062a380e-4a20-4cdd-af3f-132de11d1060.png)



