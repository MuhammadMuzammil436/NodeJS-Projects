import { connections } from "../config/db.js";

export const GetAllStudents = async (id = null) => {
    if (!id) {
        const [row] = await connections.query("SELECT * FROM `students`")
        return row
    } else {
        const [row] = await connections.query("SELECT * FROM `students` WHERE id = ? ", [id]);
        return row
    }
}