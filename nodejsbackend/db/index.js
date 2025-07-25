const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",                // default postgres user
  host: "localhost",              // or 127.0.0.1
  database: "postgres",           // default DB
  password: "Game_0863456374",    // your password
  port: 5432,
});

module.exports = pool;
