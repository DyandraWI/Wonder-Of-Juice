const pool = require("./connection");
const data = require("./jus.json");

let newData = data.map((el) => {
    return `('${el.nama_jus}', '${el.imageUrl}', ${el.harga})`;
  });

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Menu_Jus ("nama_jus", "imageUrl", "harga")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
    try {
      await pool.query(seedDataQuery);
      console.log("Success seed table Jus");
    } catch (error) {
      console.log(error);
    }
  }
  
  runSeed();