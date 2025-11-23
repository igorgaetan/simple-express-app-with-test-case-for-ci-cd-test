import request from "supertest";
import app from "../app.js";
import { sequelize } from "../src/config/database.js";
import { User } from "../src/models/User.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});



describe('User API tests', () => {
beforeAll(async () => {
await sequelize.sync({ force: true });
});


test('Create user', async () => {
const res = await request(app).post('/users').send({ name: 'Alice', email: 'a@a.com' });
expect(res.statusCode).toBe(201);
expect(res.body.name).toBe('Alice');
});


test('Get all users', async () => {
const res = await request(app).get('/users');
expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});


test('Prevent duplicate email', async () => {
const res = await request(app).post('/users').send({ name: 'Bob', email: 'a@a.com' });
expect(res.statusCode).toBe(400);
});


test('Create another user', async () => {
const res = await request(app).post('/users').send({ name: 'Chris', email: 'c@c.com' });
expect(res.statusCode).toBe(201);
});


test('Check user count', async () => {
const count = await User.count();
expect(count).toBe(2);
});
});