import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  // throw new Error("Connection error");
  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error.message);
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    return res.json({ id: result.insertId, title, description });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    // const { title, description } = req.body;
    // const [result] = pool.query(
    //   "UPDATE tasks SET title = ?,description = ? WHERE id = ?",
    //   [title, description, id]
    // );

    // const validate = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

    // if (validate[0] == "") {
    //   return res.status(404).json({ message: "Task not found" });
    // }

    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};