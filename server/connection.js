const { Pool } = require("pg");

const pool = new Pool({
  host: "db.evwdlyxxcdovkitgeyzq.supabase.co",
  user: "postgres",
  database: "postgres",
  password: "QiFF2sPuY6KLxRmJ",
  port: "5432",
  max: 20,
  idleTimeoutMillis: 2000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;