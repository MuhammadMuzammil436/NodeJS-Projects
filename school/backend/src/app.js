import express from 'express'
import { GetStudents } from './controllers/StudentsController.js';
const app = express();

app.get('/students/:id', GetStudents);
export { app }