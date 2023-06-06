import mysql from "mysql2";

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "techieoriname",
  database: "mydb",
});

const db = conn.promise();

export default db;
