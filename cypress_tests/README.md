
## Cypress 

Cypress es un framework de pruebas automatizadas para aplicaciones web. Se utiliza comúnmente para realizar pruebas de extremo a extremo en aplicaciones web. Permite simular interacciones de usuarios, como hacer clic en botones, ingresar texto en campos de formulario y navegar por diferentes páginas. Además, Cypress proporciona una amplia gama de funciones y comandos que facilitan la escritura de pruebas robustas y mantenibles.


## Aplicación Objetivo de pruebas![image](https://user-images.githubusercontent.com/124526219/236736518-0c9ae180-1e16-4704-a737-f1e26f336489.png)

- Ghost v 5.41.0 

 

## Librerías utilizadas: 

- Node v14.21.3 

- cypress v12.11.0



## Funcionalidades probadas 

- Crear cuenta nueva

- Crear Post nuevo

Santiago Sierra
Liceth Yaneth
Juan José Montenegro
Las herramientas utilizadas para el desarrollo de las pruebas E2E fueron:
Cypress
- Personalizar información general

- Importar miembros

- Crear página
 

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Cypress 

 

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

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 191436](https://user-images.githubusercontent.com/124220935/236719462-433a888e-2aa0-4d5a-82bf-ca3326dd1364.png)



 
### Escenario: 02-Crear cuenta de Ghost  (**NEGATIVO**) formato de correo incorrecto. 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los campos necesarios (correo con formato incorrecto)

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 192521](https://user-images.githubusercontent.com/124220935/236719668-6651db8b-dfe2-44ee-8503-499ad77c7f4b.png)




### Escenario: 03-Crear cuenta de Ghost  (**NEGATIVO**) formato de contraseña incorrecto. 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llena el campo de la contraseña de manera incorrecta

se obtura el botón de submit y se obtiene un resultado NEGATIVO

![Captura de pantalla 2023-05-07 192602](https://user-images.githubusercontent.com/124220935/236719899-9e49c7f5-b913-47b9-b6fd-bce9898f74bf.png)




### Escenario: 04-Crear cuenta de Ghost  (**POSITIVO**). 

se ingresa a la página: http://localhost:2369/ghost/#/setup/two

Se llenan los campos de manera correcta

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

## FUNCIONALIDAD 3: IMPORTAR MIEMBROS DESDE UN ARCHIVO CSV

### Escenario: 01- Importar miembros desde un archivo csv.

se ingresa a la pagina: http://localhost:2369/ghost/#/singin, logueando el usuario

se dirige a la pagina http://localhost:2369/ghost/#/members para cargar los miembros mediante un csv

se abre una ventana emergente para cargar los miembros

se valida que sean los miembros y se da en el boton Imports Members

se cargan los archivos y se valida que la tabla exista obteniendo un resultado POSITIVO

![image](https://user-images.githubusercontent.com/124526219/236733944-f9721d24-49ca-4bbd-8b69-3f768108b707.png)

## FUNCIONALIDAD 4: IMPORTAR MIEMBROS DESDE UN ARCHIVO CSV INVALIDO

### Escenario: 01- Importar miembros desde un archivo csv invalido.

Se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se ingresa el nombre de usuario y la contraseña.

Se dirige a la página de miembros en la dirección http://localhost:2369/ghost/#/members para cargar los miembros mediante un archivo CSV.

Se abre una ventana emergente para cargar los miembros.

Se valida que los miembros en el archivo CSV se carguen correctamente en la tabla de miembros.

Se hace clic en el botón "Import Members" para importar los miembros del archivo CSV.

Se valida que la tabla de miembros exista obteniendo un resultado POSITIVO.

Se valida que el miembro con el nombre "Juan Perez" no se haya creado en la tabla de miembros debido a la dirección de correo electrónico no válida en el archivo CSV.

![image](https://user-images.githubusercontent.com/124526219/236734605-6e6bd689-838b-4384-baff-24ff17cff821.png)


## FUNCIONALIDAD 5: PERSONALIZAR INFORMACION GENERAL

### Escenario: 01- Personalizar titulo y descripción del sitio web.

Dado que se accede al sitio web, se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se proporcionan las credenciales de inicio de sesión.

Cuando se navega a la página de configuración en la dirección http://localhost:2369/ghost/#/settings/general/, se hace clic en el botón "Expand" para ver las opciones de título y descripción.

Se borra el texto existente en los campos de título y descripción, y se escribe "New Title Test" y "New Description Test" respectivamente.

Se hace clic en el botón "Save" para guardar los cambios.

Entonces se valida que se muestra el mensaje "Saved" y se hace clic en el botón "View site" para ir a la página del sitio.

Finalmente, se verifica que el título del sitio se ha actualizado a "New Title Test" obteniendo un resultado POSITIVO.

![image](https://user-images.githubusercontent.com/124526219/236735275-cd30dde5-1c8f-4a68-88d0-c3796437083f.png)


### Escenario: 02- Personalizar zona horaria y lenguaje de publicación del sitio web.

Se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se ingresa el nombre de usuario y la contraseña.

Se hace clic en el enlace de la página de configuración.

Se hace clic en el enlace de la configuración general.

Se hace clic en el botón de cambio de zona horaria.

Se selecciona "America/Bogota" en la lista desplegable de la zona horaria.

Se hace clic de nuevo en el botón de cambio de zona horaria.

Se hace clic en el botón de cambio de idioma.

Se borra el campo de idioma y se escribe "es".

Se hace clic de nuevo en el botón de cambio de idioma.

Se hace clic en el botón "Save".

Se crea una prueba con el nombre "Then: should validate timezone".

Se comprueba que el botón "Saved" existe en la página obteniendo un resultado POSITIVO.

![image](https://user-images.githubusercontent.com/124526219/236735829-fc149ba2-603f-409d-b7f2-f73bac34fd1a.png)


## FUNCIONALIDAD 6: CREAR PAGINA

### Escenario: 01- Crear pagina inmediatamente.

Dado que se accede al sitio web, se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se proporcionan las credenciales de inicio de sesión.

Cuando se navega a la página de configuración en la dirección http://localhost:2369/ghost/#/pages/.

Se hace clic en el botón para crear una nueva página.

Se selecciona el área de texto para agregar el título de la nueva página y se escribe el título.

Se selecciona el campo de descripción y se escribe el texto de la descripción.

Se hace clic en el botón para publicar la página.

Se hace clic en el botón para configurar la publicación de la página.

Se hace clic en el botón para publicar la página inmediatamente.

Se hace clic en el botón para confirmar la publicación.

Se hace clic en el botón para volver al editor de páginas.

Se hace clic en el enlace para volver a la sección de "Páginas".

Se verifica que la página creada se encuentre en la lista de páginas obteniendo un resultado POSITIVO

![image](https://user-images.githubusercontent.com/124526219/236736518-0c9ae180-1e16-4704-a737-f1e26f336489.png)


### Escenario: 02- Crear pagina programada.

Dado que se accede al sitio web, se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se proporcionan las credenciales de inicio de sesión.

Cuando se navega a la página de configuración en la dirección http://localhost:2369/ghost/#/pages/.

Se hace clic en el botón para crear una nueva página.

Se selecciona el área de texto para agregar el título de la nueva página y se escribe el título.

Se selecciona el campo de descripción y se escribe el texto de la descripción.

Se hace clic en el botón para publicar la página.

Se hace clic en el botón para configurar la publicación de la página.

Se hace clic en el botón para publicar la página en un hora programada en la cual se puede escoger.

Se hace clic en el botón para confirmar la publicación.

Se hace clic en el botón para volver al editor de páginas.

Se hace clic en el enlace para volver a la sección de "Páginas".

Se verifica que la página creada se encuentre en la lista de páginas obteniendo un resultado POSITIVO

![image](https://user-images.githubusercontent.com/124526219/236736796-3956706d-09e8-472b-a222-0c96fedc9930.png)



## FUNCIONALIDAD 7: CREAR TAG

### Escenario: 01- Crear tag.

Dado que se accede al sitio web, se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se proporcionan las credenciales de inicio de sesión.

Cuando se navega a la página de configuración en la dirección http://localhost:2369/ghost/#/tags/.

Se hace clic en el botón para crear un nuevo tag.

Se selecciona el área de texto para agregar el nombre del tag y se escribe el nombre.

Se selecciona el campo de color y se escribe el color del tag.

Se selecciona el campo de slug y se escribe el slug del tag.

Se selecciona el campo de descripcion y se escribe el descripcion del tag.

Se hace clic en el botón Save.

Se verifica que el tag creado se encuentre en la lista de tags obteniendo un resultado POSITIVO

![image](https://user-images.githubusercontent.com/124526219/236737543-f0d622f1-3e6e-47e9-9d52-5410d33ff8d6.png)


## FUNCIONALIDAD 7: ELIMINAR PAGINA

### Escenario: 01- Eliminar Pagina.

Dado que se accede al sitio web, se ingresa a la página de inicio de sesión en la dirección http://localhost:2369/ghost/#/signin, y se proporcionan las credenciales de inicio de sesión.

Cuando se navega a la página de configuración en la dirección http://localhost:2369/ghost/#/pages/.

Se hace clic en la pagina que se desea eliminar.

Se hace clic en el boton de Settings de la pagina.

Se hace clic en el boton 'Delete Page'.

Se hace clic en la confirmacion de la eliminación.

Se verifica que la pagina se no encuentre en la lista de tags obteniendo un resultado NEGATIVO
![image](https://user-images.githubusercontent.com/124526219/236738114-81ed6cc8-fa6b-4478-aa9d-083b5530e264.png)




