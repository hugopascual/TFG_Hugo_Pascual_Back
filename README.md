# TFG_Hugo_Pascual_Back

Este código pertenece al código fuente del servidor utilizado en el TFG "Desarrollo de un servicio de compraventa de productos de segunda mano
para terminales iOS". El autor del trabajo es Hugo Pascual, alumno de la ETSIT cursando el Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación. 
El tutor del trabajo es Santiago Pavón.

El servidor esta desarrollado utilizando node.js y esta alojado en Heroku. En esta misma plataforma tambien esta la base de datos a la que el servidor realiza consultas.
El comportamiento del servidor es como el de una API a la que se realizan peticiones de datos.

Comandos de Packaje.json:
start: arranca el servidor en local como si estuviera en Heroku.
reset: elimina los datos que hubiera en la base de datos y reconstruye la estructura de datos con los que se le proporcionen en los seeders.
heroku: despliega en Heroku la última versión de la rama master del proyecto.
