const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getPosts = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts ORDER BY likes DESC');
    return rows;
  } catch (error) {
    throw error;
  }
};

const addPost = async (titulo, img, descripcion) => {
  try {
    const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [titulo, img, descripcion, 0];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const updateLikes = async (id) => {
  try {
    const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { getPosts, addPost, updateLikes, deletePost };
