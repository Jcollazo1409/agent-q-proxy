const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyToJ8a0lzpFA1UyMurqDHWpY-jmGzvkRl2a-OW5hr5OeKlAy7LhncYvRD9XKItFqLg/exec";

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status(200).send("OK");
  } catch (err) {
    console.error("Error al reenviar a Google Script:", err.message);
    res.status(500).send("Error al reenviar a Google Script");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en puerto ${PORT}`);
});