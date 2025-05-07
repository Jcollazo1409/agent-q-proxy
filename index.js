const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  console.log("Recibido en /submit:", req.body);
  res.status(200).send("Datos recibidos correctamente.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});