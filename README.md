# 📦 Desarrollo Backend 3 – Testing y Escalabilidad Backend

Este proyecto forma parte de la cursada **Desarrollo de Backend 3** (Coderhouse) y tiene como objetivo profundizar el diseño de APIs profesionales utilizando **Node.js**, **Express** y **MongoDB**, aplicando buenas prácticas de arquitectura, modularización, mocking de datos y persistencia en base de datos.

El foco principal de esta entrega está puesto en la **generación de datos mockeados**, la correcta **separación de responsabilidades** y la creación de endpoints preparados para entornos de testing y desarrollo.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Faker.js**
- **bcrypt**
- **JavaScript (ES Modules)**

---

## 📁 Estructura del proyecto

```
src/
│
├── routes/
│   └── mocks.router.js
│   └── pets.router.js
│   └── users.router.js
│
├── mocks/
│   ├── mockingUsers.js
│   └── mockingPets.js
│
├── models/
│   ├── user.model.js
│   └── pet.model.js
│
├── utils/
│   └── bcrypt.js
│
├── app.js
└── server.js
```

---

## 🧠 Objetivo del proyecto

El proyecto busca:

- Implementar **módulos de mocking** para usuarios y mascotas.
- Simular respuestas realistas con formato de MongoDB.
- Insertar datos de prueba directamente en la base de datos.
- Facilitar entornos de testing sin depender de datos reales.
- Respetar buenas prácticas de desarrollo backend.

---

## 🧩 Endpoints disponibles

### `/api/mocks`

- **GET** `/api/mocks/mockingpets`
- **GET** `/api/mocks/mockingusers`
- **POST** `/api/mocks/generateData`

---

## 🧩 Funcionalidades principales

### 🔹 Router `/api/mocks`

Se creó un router específico para manejar todo lo relacionado al mocking de datos.

#### 📌 GET `/api/mocks/mockingpets`

- Devuelve una lista de mascotas mockeadas.
- No persiste datos en la base de datos.

#### 📌 GET `/api/mocks/mockingusers`

- Genera **50 usuarios mockeados**.
- Cada usuario contiene:
  - `password` encriptada con bcrypt (`coder123`)
  - `role` aleatorio (`user` o `admin`)
  - `pets` como array vacío
- Devuelve el formato esperado por MongoDB.

#### 📌 POST `/api/mocks/generateData`

- Recibe parámetros numéricos `users` y `pets`.
- Genera e inserta la cantidad indicada en la base de datos.
- Permite validar la persistencia mediante los endpoints reales de users y pets.

Ejemplo de body:
```json
{
  "users": 10,
  "pets": 20
}
```

---

## 🔐 Seguridad

- Las contraseñas de los usuarios mockeados se generan encriptadas usando **bcrypt**.
- El hash está encapsulado en un helper para facilitar su reutilización y mantenimiento.

---

## 🧪 Verificación de datos

Una vez ejecutado el endpoint `/generateData`, los datos pueden verificarse mediante:

- `GET /api/users`
- `GET /api/pets`

Confirmando así que los registros fueron correctamente insertados en MongoDB.

---

## ⚙️ Instalación

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Configurar variable de entorno MONGO_URL (opcional)
4. Ejecutar `npm run dev`

```bash
npm install
npm run dev
```

---

## 👨‍💻 Autor

Proyecto desarrollado por **Agustín Ré**  
Curso: **Desarrollo Backend 3 – Coderhouse**