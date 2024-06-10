# Proyecto de Backend

Este es un proyecto donde usamos una API para crear usuarios y dales un inicio de sesion para que puedas crear
posts, editarlos o elimarlos.

## Configuración

1. **Instalación de dependencias**: Instalar las dependencias `npm install`.

2. **Variables de entorno**: Crea tu archivo`.env` en el directorio raíz del proyecto y proporcionar los valores que estan 
dentro del archivo `example.env`.

3. **Ejecución del servidor**: Una vez que hayas instalado las dependencias y configurado las variables de entorno, puedes iniciar el servidor ejecutando `npm run dev`.

## Estructura del proyecto

El proyecto sigue una estructura de carpetas organizada de la siguiente manera:

- `src/`: Contiene todo el código fuente de la aplicación.
  - `middlewares/`: Middlewares para procesamiento y modificación de solicitudes: Permiten modificar req y res.
  - `models/`: Modelos de datos que representan la informacion guardada en la base de datos.
  - `routes/`: Rutas para gestionar las solicitudes HTTP entrantes. Utilizando uno o más métodos HTTP (GET, POST, PUT, DELETE).
  - `usecases/`: Casos de uso que encapsulan la lógica de negocio de la aplicación.
  - `lib/`: Utilidades y funciones auxiliares.
- `server.js`: Contiene la informacion del servidor.
- `index.js`: Inicia y conecta el servidor junto con la base de datos

## Endpoints de la API

La API proporciona los siguientes endpoints:

- **POST /users**: Para permitir el registro a los nuevos usuarios
- **GET /users/:id**: Para obtener la información de un usuario por id
- **POST /auth/login**: Inicia sesión Para otorgar un nuevo JWT cada que es llamado.
- **POST /posts**: Para crear un nuevo post, el post creado será asignado al usuario que llamó este endpoint. Requiere autorizacion.
- **GET /posts**: Listar todos los posts. No requiere autorización.
- **PATCH /posts/:id**: Para permitir actualizar un post. No se permite cambiar el usuario de un post. Requiere autorizacion.
- **DELETE /posts/:id**: Para permitir borrar un post. Solo el usuario dueño del post debe ser capaz de ejecutar esta acción. Requiere autorización