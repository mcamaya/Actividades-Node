# API REST desde Node.js
## Aquí el paso a paso
Es importante mencionar que cada anotación viene acompañada de un commit en específico. Así que es necesario visualizar los cambios en código para poder entender la explicación.

### 1. Instalamos dependencias
Corremos los siguientes comandos dentro de la carpeta backend
```
npm init -y
npm i express
npm i -D nodemon
npm i dotenv
npm i promise-mysql
```
Esto nos creará los archivos `package.json` y `package-lock.json`. Son fundamentales. También se ignora la carpeta de `node_modules` en el .`.gitignore`

### 2. Creamos la estructura de carpetas

- **backend**
    - **src**
        - **controllers**
        - **db**
        - **routes**
        - app.js
        - config.js
        - index.js
    - .env
    - package-lock.json
    - package.json


### 3. Importamos { express }
**IMPORTANTE: añadimos una llave `"type":"module` en el archivo `package.json`** 

Importamos express en nuestro archivo `app.js`. Guardamos todo el _poder_ de express dentro de la variable app, asignamos puerto y la exportamos.

Importamos la variable app dentro de index.js y creamos una función para que escuche el puerto de manera constante


### 4. Usamos el enrutador y el controlador para mostrar datos
Dentro de el archivo `constructoras.controllers.js` creamos nuestra función para obtener los datos de la database (aún falta hacer la conexión). 

Luego dentro de mi enrutador `constructoras.routers.js` importo mi objeto _methodsHTTP_ para usar la función _getConstructoras_

Finalmente, importo el enrutador dentro de mi archivo `app.js` para poder asignarle la debida url que mostrará los datos en formato json.


### 5. Configuración variables de entorno
Escribimos dentro del archivo `.env` nuestras variables de entorno. Este archivo NO se debe hacer público, ya que contiene datos sensibles.

Luego importamos config dentro de nuestro archivo `config.js`, y seguidamente exportamos un objeto que contiene mis variables de entorno 