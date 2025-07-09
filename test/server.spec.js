const request = require('supertest');
const server = require('../index');

describe("Operaciones CRUD de cafés", () => {

    // 1. GET /cafes
    it("Debe devolver status 200 y un arreglo con al menos un objeto", async () => {
        const res = await request(server).get("/cafes");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(typeof res.body[0]).toBe("object");
    });

    // 2. DELETE /cafes/:id con ID inexistente
    it("Debe devolver 404 al intentar eliminar un café con id inexistente", async () => {
        const idInexistente = 999;
        const jwt = "token"; // Simulación de token
        const res = await request(server)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt);
        expect(res.statusCode).toBe(404);
    });

    // 3. POST /cafes agrega nuevo café y devuelve 201
    it("Debe agregar un nuevo café y devolver status 201", async () => {
        const nuevoCafe = {
            id: Math.floor(Math.random() * 10000), // Para evitar duplicados
            nombre: "Nuevo Café de Prueba"
        };

        const res = await request(server)
            .post("/cafes")
            .send(nuevoCafe);

        expect(res.statusCode).toBe(201);
        expect(Array.isArray(res.body)).toBe(true);
        const cafeAgregado = res.body.find(c => c.id === nuevoCafe.id);
        expect(cafeAgregado).toBeDefined();
    });

    // 4. PUT /cafes con id diferente
    it("Debe devolver 400 si el id del parámetro es distinto al del payload", async () => {
        const cafeModificado = {
            id: 1234, // id en el body
            nombre: "Modificado"
        };

        const res = await request(server)
            .put("/cafes/9999") // id diferente en la URL
            .send(cafeModificado);

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("El id del parámetro no coincide con el id del café recibido");
    });

});
