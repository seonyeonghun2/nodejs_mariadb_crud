import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

const getAllUsers = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM students");
    return rows;
  } finally {
    if (conn) conn.release();
  }
};

const userModel = {
  getAllUsers,
};

export default userModel;
