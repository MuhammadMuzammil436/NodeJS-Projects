import { connections } from "../config/db.js";
import { GetAllStudents } from "../models/students.js";


export const GetStudents = async (req, res) => {
    const id = req.params.id;
    try {
        const students = await GetAllStudents(id);
        res.json(students);
        console.log(students)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Database error' });
    }

}