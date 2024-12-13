// setup.js
const pool = require("./connection");

let createTableJus = `
  create table Menu_Jus (
  "id" serial primary key,
  "nama_jus" varchar (50),
  "imageUrl" text,
  "harga" integer
);
`;

// function runSetup () {
//   pool.query(createTableJus);
//   console.log("Succces");
// }

// runSetup();

// koneksi ke database => asynchronous
async function runSetup() {
  try {
    await pool.query(createTableJus);
    console.log("Success setup table Jus");
  } catch (error) {
    console.log(error);
  }
}

runSetup();