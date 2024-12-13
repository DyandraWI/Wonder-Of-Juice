// cara untuk memberi tahu file js kita bahwa kita akan pakai suatu package/applikasi namanya express
const express = require("express");
const pool = require('./connection');
const cors = require("cors");
const app = express();
// kita bikin servernya

const port = 3000;
// define port

//? routing / endpoint
// get -> ambil data
// post -> ngirim data

// permission cors
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello Universe!");
});

app.get("/menu-jus", async (request, response) => {
  response.json
  try {
    const data = await pool.query(`SELECT * FROM menu_jus`);
    console.log(data);

    let dataJus = data.rows;

    response.json(dataJus);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// :id -> params
app.get("/menu-jus/:id", async (request, response) => {
  response.json
  try {
    const data = await pool.query(`SELECT * FROM menu_jus where id = ${request.params.id}`);
    console.log(data);
    let dataJus = data.rows[0];

    // if (dataJus === undefined || dataJus === null) {}
    if (!dataJus) {
      response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataJus);
    }
    
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// routing

// function untuk menjalankan expressnya di port yg tadi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// === equal value dan tipe data
// == equal value

// console.log(10 === "10");
// console.log(10 == "10");
