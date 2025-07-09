# CoffeShop Nanacao

### Desafío final para el módulo de NodeJs de la generación 86 de DesafíoLatam

Este proyecto es una API REST simple para gestionar una lista de cafés. Incluye rutas para operaciones CRUD (crear, leer, actualizar, eliminar) y pruebas automatizadas usando **Jest** y **Supertest**.


--- 

## 🚀 Tecnologías utilizadas

 - Node.js
 - Express
 - Jest
 - Supertest

---

## 📦 Instalación

1. Clona el proyecto

 ```bash
git clone https://github.com/FranciscoArce92/nanacao.git
cd nanacao
```

2. Instala las dependencias

```bash
  npm install
```

## ▶️ Ejecutar el servidor

```bash
node index.js
```
El servidor correra en: http://localhost:3000

## 🧪 Ejecutar pruebas

Este proyecto incluye pruebas automatizadas usando Jest y Supertest.
```bash
npm test
```

## 📋 Endpoints disponibles

Método |	Ruta | Descripción
 ----------- | ----------- | ----------- |
GET |	/cafes |	Retorna todos los cafés
GET |	/cafes/:id |	Retorna un café por su ID
POST | /cafes |	Agrega un nuevo café
PUT |	/cafes/:id | Actualiza un café (requiere ID coincidente)
DELETE |	/cafes/:id |	Elimina un café (requiere token en header)

## 🔒 Seguridad
Para eliminar un café con ```DELETE /cafes/:id```, se requiere enviar un token en el header:
```bash
Authorization: token
```

## ✅ Pruebas realizadas
 1. ```GET /cafes``` retorna status 200 y un arreglo con al menos un objeto.
 2. ```DELETE /cafes/:id``` con ID inexistente retorna status 404.
 3. ```POST /cafes``` agrega un nuevo café y retorna status 201.
 4. ```PUT /cafes/:id``` con ID distinto en el body y el parámetro retorna status 400.

![image](https://github.com/user-attachments/assets/5b4c4635-f4e0-4130-9c00-5b4f89453819)

