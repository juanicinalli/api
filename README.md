<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta el siguiente comando para instalar las dependencias:

```bash

npm install

```
## Configuración

Ambos microservicios requieren ciertos parámetros de configuración para establecer conexiones y ajustes. Sigue estos pasos para configurar los microservicios:
En el directorio raíz, crea un archivo .env basado en el archivo .env.example proporcionado en este repositorio. Llena las variables de entorno según tu configuración local

```bash

cp .env.example .env

```

## Ejecución con Docker Compose

Para simplificar el despliegue de MongoDB, puedes utilizar Docker Compose. Sigue estos pasos para ejecutar los microservicios con Docker Compose:

1. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

2. En la raíz del proyecto, ejecuta el siguiente comando para iniciar el contenedor con algunos registros:

```bash

docker-compose up

```

## Ejecutando las apps

1. En una terminal, ejecuta el siguiente comando para iniciar el microservicio de "login":

```bash

$ npm run start login

```

2.Abre otra terminal y ejecuta el siguiente comando para iniciar el microservicio de "business":

```bash

$ npm run start business

```

## Prueba de los endpoints

```bash
[POST] http://localhost:3000/auth/register
[Body]
{
    "email": "conexatest@gmail.com",
    "password": "conexatest123"
}

[POST] http://localhost:3000/auth/login
[Body]
{
    "email": "conexatest@gmail.com",
    "password": "conexatest123"
}

[GET] http://localhost:3000/user
[params] 'page - limit - email'

```




