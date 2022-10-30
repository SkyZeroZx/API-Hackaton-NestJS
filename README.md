<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
 
  <p align="center">Es el API REST para la WebAPP/PWA Hackaton For Gentleman Programming integrado con Web Authentication para el inicio de sesion passworless.
  <a href="https://github.com/code-sys/hackaton-getonbrd-front-end" target="_blank"> FrontEnd Hackaton</a></p>

## :ledger: Index

- [Pre-Requisitos](#pre-requisitos-)
- [Instalación](#instalación-)
- [Desarrollo](#desarrollo-%EF%B8%8F)
  - [Build](#build)
- [Despligue](#despliegue-)
- [Logger](#logger)
- [Documentación](#documentacion)
- [Construido](#construido-con-)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

_Puede ver una demo en el enlace:_

```
https://api-hackaton.skyzerozx.com
```

## Pre-Requisitos 📋

_Software requerido_

```
NodeJS >= 14.X
NPM >= 8.X
NestJS >= 9.X
MySQL >=8.X
```

_Software opcional_

```
Visual Studio Code ( O el editor de su preferencia)
```

## Instalación 🔧

_Para ejecutar un entorno de desarrollo_

_Previamente ejecutar el comando en la terminal para descargar "node_modules" para el funcionamiento del proyecto_

```
 npm install
```

_Previamente a ejecutar el servidor en desarrollo configurar el archivo .env con las credenciales del servidor correos y base de datos , ejecutar :_

```
 npm run start:dev
```

_Dirigirse a la ruta http://localhost:3000/ donde tendra el API REST levantada_

## Desarrollo ⚙️

_Las siguientes instrucciones serviran para ejecutar en su entorno local la pruebas unitarias realizadas para el proyecto_

### Build

_Para generar el build de producción del proyecto ejecutar el siguiente comando:_

```
 npm run build
```

## Despliegue 👨🏻‍💻

_Para desplegar el proyecto mediante Docker se tiene los archivos `Dockerfile` y `docker-compose.prod.yaml`, los cuales tienen preconfigurado la imagen y dependencias necesarias para levantar el proyecto_

_Para construir la imagen y ejecutarla tenemos el siguiente comando , el cual tambien tomara nuestras variable de entorno del archivo `env`_

_Ejecutar el siguiente comando en la raiz del proyecto_

```
 docker-compose -f docker-compose.prod.yaml --env-file .env up --build
```

![Docker 1](/docs/docker/docker-1.png)

![Docker 2](/docs/docker/docker-2.png)

_En caso de requerir volver a ejecutar el contenedor del proyecto previamente creado ejecutar el comando:_

```
 docker-compose -f docker-compose.prod.yaml --env-file .env up
```

## Documentacion

_Se realizo la documentación del API Rest usando Swagger el cual puede encontrar en la ruta http://localhost:3000/docs/ en la configuración por default_

![Swagger 1](/docs/swagger/swagger-1.jpg)

## Logger

_Se integro winston para reemplazar el logger de NestJS para realizar seguimiento y conservacion de los logs segun sea requerido_

_En el archivo `.env` se tienen los siguientes apartados configurados por default:_

```
APP_NAME=API-HACKATON
DATE_PATTERN=YYYY-MM-DD
MAX_SIZE=20m
MAX_DAYS=14d
```

_Por default la carpeta donde se guardan los logs es `LOG` , el formato configurado es JSON_

## Construido con 🛠️

_Las herramientas utilizadas son:_

- [NestJS](https://nestjs.com/) - El framework para construir aplicaciones del lado del servidor eficientes, confiables y escalables.
- [NPM](https://www.npmjs.com/) - Manejador de dependencias
- [Docker](https://www.docker.com/) - Para el despliegue de aplicaciones basado en contenedores
- [Visual Studio Code](https://code.visualstudio.com/) - Editor de Codigo
- [Prettier](https://prettier.io/) - Formateador de Codigo
- [WebAuthn](https://webauthn.guide/) - Estándar web del proyecto FIDO2 de la Alianza FIDO
- [TabNine](https://www.tabnine.com/) - Autocompletador de Codigo
- [Swagger](https://swagger.io/) - Automatización de Documentación
- [Winston](https://github.com/winstonjs/winston) - Logger para NodeJS

## Versionado 📌

Usamos [GIT](https://git-scm.com/) para el versionado.