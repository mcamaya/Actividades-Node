# API REST desde Node.js
## Aquí el paso a paso

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