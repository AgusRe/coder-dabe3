# 📦 Desarrollo Backend 3 – Testing y Escalabilidad Backend

Este proyecto forma parte de la cursada **Desarrollo de Backend 3** (Coderhouse) y tiene como objetivo profundizar el diseño de APIs profesionales utilizando **Node.js**, **Express** y **MongoDB**, aplicando buenas prácticas de arquitectura, modularización, testing funcional y containerización con Docker.

---

## 🐳 Imagen en DockerHub

La imagen del proyecto está disponible públicamente en DockerHub:

🔗 **https://hub.docker.com/r/agusinre/coder-dabe3**

Para correr el proyecto directamente desde la imagen:

```bash
docker pull agusinre/coder-dabe3
docker run -p 8080:8080 -e MONGO_URL=<tu_mongo_url> agusinre/coder-dabe3
```

---

## 🚀 Tecnologías utilizadas

- **Node.js 20**
- **Express**
- **MongoDB + Mongoose**
- **Faker.js**
- **bcrypt**
- **JWT**
- **Chai + Supertest + Mocha** (testing)
- **Docker**
- **JavaScript (ES Modules)**

---

## 📁 Estructura del proyecto

```
src/
│
├── controllers/
│   ├── adoptions.controller.js
│   ├── pets.controller.js
│   ├── sessions.controller.js
│   └── users.controller.js
│
├── dao/
│   ├── mongo/
│   │   ├── adoptions.dao.js
│   │   ├── pets.dao.js
│   │   └── users.dao.js
│   ├── Adoption.js
│   ├── Pets.dao.js
│   └── Users.dao.js
│
├── dto/
│   └── User.dto.js
│
├── mocks/
│   ├── mockingPets.js
│   └── mockingUsers.js
│
├── models/
│   ├── adoption.model.js
│   ├── pet.model.js
│   └── user.model.js
│
├── repository/
│   ├── AdoptionRepository.js
│   ├── GenericRepository.js
│   ├── index.js
│   ├── PetRepository.js
│   └── UserRepository.js
│
├── routes/
│   ├── adoption.router.js
│   ├── mocks.router.js
│   ├── pets.router.js
│   ├── sessions.router.js
│   └── users.router.js
│
├── services/
│   ├── adoptions.service.js
│   └── index.js
│
├── utils/
│   └── index.js
│
├── app.js
└── server.js

test/
└── adoption.test.js
```

---

## 🧩 Endpoints disponibles

### `/api/adoptions`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/adoptions` | Obtener todas las adopciones |
| GET | `/api/adoptions/:aid` | Obtener adopción por ID |
| POST | `/api/adoptions/:uid/:pid` | Crear una adopción |

### `/api/sessions`

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/sessions/register` | Registrar usuario |
| POST | `/api/sessions/login` | Iniciar sesión |
| GET | `/api/sessions/current` | Obtener usuario actual (JWT) |

### `/api/pets`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/pets` | Obtener todas las mascotas |
| POST | `/api/pets` | Crear mascota |

### `/api/users`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/:uid` | Obtener usuario por ID |

### `/api/mocks`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/mocks/mockingpets` | Generar mascotas mockeadas |
| GET | `/api/mocks/mockingusers` | Generar usuarios mockeados |
| POST | `/api/mocks/generateData` | Insertar datos mock en DB |

---

## 🧪 Tests funcionales

Los tests cubren todos los endpoints del router `adoption.router.js`:

```bash
npm test
```

Resultados esperados:
```
✔ GET /api/adoptions debe devolver todas las adopciones
✔ Crear usuario para el test
✔ Crear mascota para el test
✔ POST /api/adoptions/:uid/:pid debe crear una adopción
✔ GET /api/adoptions/:aid debe obtener una adopción por id
5 passing
```

---

## 🐳 Docker

### Construir la imagen localmente

```bash
docker build -t coder-dabe3 .
```

### Correr el contenedor

```bash
docker run -p 8080:8080 -e MONGO_URL=<tu_mongo_url> coder-dabe3
```

> ⚠️ Al correr en Docker, `MONGO_URL=mongodb://localhost:27017/...` **no funciona** porque localhost apunta al contenedor.  
> Usá una URL de **MongoDB Atlas** o configurá una red Docker con un contenedor de Mongo.

### Usar con MongoDB Atlas

1. Creá un cluster gratuito en https://cloud.mongodb.com
2. Copiá la connection string
3. Pasala como variable de entorno:

```bash
docker run -p 8080:8080 \
  -e MONGO_URL=mongodb+srv://usuario:password@cluster.mongodb.net/coder-dabe3 \
  agusinre/coder-dabe3
```

### Variables de entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `MONGO_URL` | URL de conexión a MongoDB | `mongodb://localhost:27017/coder-dabe3` |
| `PORT` | Puerto del servidor | `8080` |

---

## ⚙️ Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/AgusRe/coder-dabe3

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env  # editar con tus valores

# 4. Correr en desarrollo
npm run dev
```

---

## 👨‍💻 Autor

Proyecto desarrollado por **Agustín Ré**  
Curso: **Desarrollo Backend 3 – Coderhouse**  
GitHub: [@AgusRe](https://github.com/AgusRe)
