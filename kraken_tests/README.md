
## Kraken 

Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB. Esta soporta escenarios donde es requerida la intercomunicación entre usuarios o dispositivos 

 

## Aplicación Objetivo de pruebas

- Ghost v 5.41.0 

 

## Librerías utilizadas: 

- Node v14.21.3 

- kraken-node v.1.0.24 

- Cucumber v.7.2.1 
- ResembleJS v.4.1.0

 

## Funcionalidades probadas 

- Crear Post 

- Editar Post 

- Eliminar Post 

- Buscar Post

- Crear Tag 

- Editar Tag 

- Buscar Tags 

- Editar información de perfil

- Crear un nuevo miembro

- Editar un miembro

- Eliminar un miembro

- Crear una nueva pagina

- Editar una nueva pagina

- Editar la zona horaria de la pagina

- Editar el idioma de las publicaciones de la página.

- Activar o desactivar el modo oscuro

 

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

[Escenarios de pruebas](https://github.com/danierazome/Pruebas-automatizadas/wiki/Escenario-de-pruebas)

## Ejecucion de pruebas de regresion visual con Resemblejs

La aplicacion Ghost se pasa de la version 5.41.0 a la version 3.42.0

Nota: La convención de nombres para los escenarios de pruebas en el proyecto de kraken es el siguiente:
codigoDelEscenario-VersionDelAplicativo

1. Se ejucutan los escenarios de pruebas con la herramienta kraken para la version antigua 5.41.0 generando asi reportes en la carpeta report en la raiz del proyecto kraken_tests donde se podran encontrar screenshots por cada paso de los escenarios de pruebas
2. Se ejucutan los escenarios de pruebas con la herramienta kraken para la version nueva 3.42.0 generando asi reportes en la carpeta report en la raiz del proyecto kraken_project donde se podran encontrar screenshots por cada paso de los escenarios de pruebas
3. Se descarga de este repositorio el proyecto ReseambleJS para kraken el cual se encuenta en kraken_tests/ResembleJS_kraken
4. Se lanza el comando npm install para que descargue las librerias necesarias para compilar el proyecto de ResembleJS_kraken
5. Se copia los screenshots generados en el paso 1 para el escenario x en el proyecto de ResembleJS_kraken en la ubicación  ResembleJS_kraken/scenario/old-version y los screenshots generados en el paso 2 para el escenario x en la carpeta ResembleJS_kraken/scenario/new-version
6. Se ejecuta el comando npm index.js para correr las pruebas de regresion visual
7. Se dirigue a ResembleJS_kraken/report/*FechaDeEjecucionDeLaRegresionVisual*
 8. Se abre el report.html para visualizar el resultado de las pruebas
                                                                           
 


