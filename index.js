const express = require("express");
const cors = require("cors");
const axios = require("axios");
const qs = require("qs"); // para formatear como x-www-form-urlencoded

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyToJ8a0lzpFA1UyMurqDHWpY-jmGzvkRl2a-OW5hr5OeKlAy7LhncYvRD9XKItFqLg/exec";

app.post("/submit", async (req, res) => {
  try {
    console.log("Recibido en /submit:", req.body);

    const response = await axios.post(GOOGLE_SCRIPT_URL, qs.stringify(req.body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.status(200).send("Datos reenviados correctamente.");
  } catch (err) {
    console.error("Error al reenviar a Google Script:", err.message);
    res.status(500).send("Error al reenviar a Google Script");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en puerto ${PORT}`);
});
