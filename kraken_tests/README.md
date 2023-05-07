
## Kraken 

Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB. Esta soporta escenarios donde es requerida la intercomunicación entre usuarios o dispositivos 

 

## Aplicación Objetivo de pruebas

- Ghost v 5.41.0 

 

## Librerías utilizadas: 

- Node v14.21.3 

- kraken-node v.1.0.24 

- Cucumber v.7.2.1 

 

## Funcionalidades probadas 

- Crear Post 

- Editar Post 

- Eliminar Post 

- Buscar Post

- Crear Tag 

- Editar Tag 

- Buscar Tags 

- Editar información de perfil 

 

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Kraken 

 

### Preparación del ambiente 

1. Descargar el repositorio https://github.com/danierazome/Pruebas-automatizadas de la rama master 

2. Abrir la carpeta kraken_tests/kraken_project con el IDE de su gusto 

3. Ejecutar en la raíz del proyecto:  npm install para descargar las librerías requeridas por kraken 

### Ejecución de pruebas 

1. Correr Ghost localmente 

2. En qué caso de no tener cuenta en Ghost crea una 

3. Importante tener en cuenta que todas las pruebas deben ser realizaran con la misma cuenta registrada en Ghost 

4. Dirigirse al archivo step.js el cual se encuentra en features/web/step_definitions y modificar las constantes email y password con las asociadas con las registradas en ghost localmente 

5. Ir a la carpeta /features y ejecutar los escenarios de forma secuencial, es decir ejecutar primero el archivo sc01.feature, después sc02.feature y así sucesivamente.  

6. Cambiar la extensión del archivo del escenario al que se vaya a probar a .feature y cambiar la extensión del archivo del último escenario probado a .f 

7. Ejecutar el escenario de pruebas ejecutando el comando  npx kraken-node run 

8. Ir a la carpeta reports en la raíz del proyecto y revisar los resultados 

 

## Escenarios de pruebas: 

 

### Escenario: 01-Crear Post y rastrearlo con el buscador 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"  

When: Se ingresa email y password y se presiona el botón Sign in  

And: Se hace click en el botón + del Ítem Post del menú principal para crear nuevo post  

And:  Se ingresa el nombre del post "Primer Post"  

And: Se ingresa el cuerpo del post "Este es mi primer post"  

And: Se hace click en el botón publicar  

And: Se hace click en el botón continuar, revisión final  

And: Se hace click en el botón publicar post, ahora  

And: Se dirige a la página "http://localhost:2368/ghost/#/site"  

And: Se hace click en el botón buscar del menú lateral  

And: Se digita el título del post creado en el input desplegado "Primer Post"  

Then: Se hace click en ítem relacionado con el post encontrado por el titulo digitado 

 

### Escenario: 02- Crear Post y Eliminar post 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se hace click en el botón + del Ítem Post del menú principal para crear nuevo post   

And:  Se ingresa el nombre del post "Segundo Post"   

And: Se ingresa el cuerpo del post "Este es mi segundo post"   

And: Se hace click en el botón publicar   

And: Se hace click en el botón continuar, revisión final   

And: Se hace click en el botón publicar post, ahora   

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el título del post creado en el input desplegado "Segundo Post"   

And: Se hace click en ítem relacionado con el post encontrado por el titulo digitado  

And: Se hace click en el botón settings en la parte superior izquierda 

And: Se hace click en el botón Borrar post 

Then: Se hace click en el botón Borrar para confirmar el borrado 

### Escenario: 03- Buscar y editar post 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el título del post creado en el input desplegado "Primer Post"   

And: Se hace click en ítem relacionado con el post encontrado por el titulo digitado  

And: Se actualiza el nombre del post "Tercer post"  

And: Se actualiza el cuerpo del post "Este es mi tercer post"  

Then: Se hace click en el botón actualizar 

And Se dirige a la página "http://localhost:2368/ghost/#/site"   

 

### Escenario: 04-Crear Tag y rastrearlo con el buscador 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"  

When: Se ingresa email y password y se presiona el botón Sign in  

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el ítem tag del menú lateral  

And: Se hace click en el botón New Tags 

And:  Se ingresa el nombre del tag "Tag número 1" 

And: Se hace click en el botón Guardar 

And: Se dirige a la página "http://localhost:2368/ghost/#/tags"  

And: Se hace click en el botón buscar del menú lateral  

And: Se digita el nombre del tag creado en el input desplegado "Tag número 1" 

Then: Se hace click en ítem relacionado con el tag encontrado por el nombre digitado 

 

### Escenario: 05-Crear Tag y eliminarlo 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"  

When: Se ingresa email y password y se presiona el botón Sign in  

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el ítem tag del menú lateral  

And: Se hace click en el botón New Tags 

And:  Se ingresa el nombre del tag "Tag número 2" 

And: Se hace click en el botón Guardar 

And: Se dirige a la página "http://localhost:2368/ghost/#/tags"  

And: Se hace click en el botón buscar del menú lateral  

And: Se digita el nombre del tag creado en el input desplegado "Tag número 2" 

And: Se hace click en ítem relacionado con el tag encontrado por el nombre digitado 

And: Se hace click en el botón Borrar tag 

And: Se hace click en el botón borrar para confirmar el borrado 

Then: Se dirige a la página "http://localhost:2368/ghost/#/tags"   

 

### Escenario: 06- Buscar y editar Tag 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página "http://localhost:2368/ghost/#/tags"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el nombre del tag creado en el input desplegado "Tag número 1"   

And: Se hace click en ítem relacionado con el tag encontrado por el nombre digitado  

And: Se actualiza el nombre del tag " Tag número 3"  

And: Se hace click en el botón guardar 

And Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el nombre del tag actualizado en el input desplegado "Tag número 3"   

Then: Se hace click en ítem relacionado con el tag encontrado por el nombre digitado 

 

### Escenario: 07- Buscar post y asignarle un tag previamente creado 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el título del post creado en el input desplegado "Tercer Post"   

And: Se hace click en ítem relacionado con el post encontrado por el titulo digitado  

And: Se hace click en botón setting en la parte superior izquierda 

And: Se digita el nombre del Tag "Tag número 3" en el campo Tag 

And: Se selecciona el ítem del tag desplegado en el dropbox 

And: Se hace click en el botón actualizar 

Then Se dirige a la página "http://localhost:2368/ghost/#/site"   

 

### Escenario: 08- Buscar post y por tag 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página " http://localhost:2368/ghost/#/posts?tag=tag-numero-3” 

Then: Se hace click en post encontrado 

 

### Escenario: 09- Buscar post y despublicarlo 

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el botón buscar del menú lateral   

And: Se digita el título del post creado en el input desplegado "Tercer Post"   

And: Se hace click en ítem relacionado con el post encontrado por el titulo digitado  

And: Se hace click en botón despublicar 

And: Se hace click en botón despublicar, revertir  

And Se dirige a la página "http://localhost:2368/ghost/#/site"   

And Se hace click en el botón de la barra lateral Draft 

Then Se hace click en click en post previamente despublicado 

 

### Escenario: 10- Editar Información de perfil  

Given Se dirige a la página "http://localhost:2368/ghost/#/signin"   

When: Se ingresa email y password y se presiona el botón Sign in   

And: Se dirige a la página "http://localhost:2368/ghost/#/site"   

And: Se hace click en el avatar presente en el  menú lateral   

And: Se hace click en el avatar  item desplegado con nombre tu perfil 

And: Se actualiza el nombre del perfil 

Then: Se hace click en el botón guardar  

 
