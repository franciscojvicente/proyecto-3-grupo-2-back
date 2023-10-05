# Veterinaria Patitas

## Introduction
Este repositorio es la representación en código del backend para la API del proyecto número 3 de RollingCode School en el que el tema a tratar es una veterinaria.

## Run

### Configurar conexión a la base de datos
Debe ir al archivo `.env` y agregar la url de conexión a la base de datos elegida, en nuestro caso, mongoDB.
Pueden utilizar la siguieinte URL, pero necesita obtener su `username`, `password` y `dbName`, incluso el nombre del `cluster` que crearon en su base de datos desde mongoDB.

```
mongodb+srv://<username>:<password>@veterinariapatitas.0pr0jqj.mongodb.net/
```


### Instalar

```
git clone https://github.com/franciscojvicente/proyecto-3-grupo-2-back.git
cd backend-veterinaria
npm install
```

### Iniciar API

```
npm run dev
```

## Routes

### Users

```
GET      /veterinaria/patitas/users
GET      /veterinaria/patitas/user/:id
PUT      /veterinaria/patitas/user/:id
PUT      /veterinaria/patitas/admin/:id
DELETE   /veterinaria/patitas/user/:id
```

#### Registrar un nuevo usuario (por defecto con el rol 'user')

```
POST     /veterinaria/patitas/registrar
```

#### Login Routes

Para loguearse y obtener el token de autenticación:

```
POST     /veterinaria/patitas/login
```

#### Pacient Routes

```
POST     /veterinaria/patitas/paciente
GET     /veterinaria/patitas/pacientes
GET     /veterinaria/patitas/paciente/:id
PUT     /veterinaria/patitas/paciente/:id
DELETE     /veterinaria/patitas/paciente/:id
```

#### Turno Routes

```
POST     /veterinaria/patitas/turno
GET     /veterinaria/patitas/turnos
GET     /veterinaria/patitas/turno/:id
PUT     /veterinaria/patitas/turno/:id
DELETE     /veterinaria/patitas/turno/:id
```
#### Planes Routes

```
POST     /veterinaria/patitas/solicitud
```


# Tecnologia Principal
* [NodeJS](https://nodejs.org/es/) - FrameWork Back-End

## Frameworks adicionales y otras implementaciones
* [Express](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js
* [nodemon](https://nodemon.io) - Actualiza tu servidor de Node cuando realizas cambios en algun archivo
* [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Encriptación
* [JWT](https://jwt.io/) - Generar tokens
* [Mongoose](https://mongoosejs.com/) - Modelado de objetos MongoDB para Node.js
* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
* [passport](http://www.passportjs.org/) - Autenticaciones en NodeJs
* [dotenv](https://www.npmjs.com/package/dotenv) - Variables de Entorno
* [cors](https://www.npmjs.com/package/cors) - Control de Acceso HTTP
* [multer](https://www.npmjs.com/package/multer) - Manejo de archivos en NodeJS

# Base de Datos
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud


## Autor
* **Francisco José Vicente**


















