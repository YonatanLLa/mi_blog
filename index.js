const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

// inicializar app
console.log("App de node arrancada");

// concta  a la base de datos
connection();
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

// Rutas
app.get("/probando", (req, res) => {
	console.log("Se ha ejecutado :v");
	return res.status(200).json({ name: "yonata", lastname: "llanto" });
});

// crear servidor
app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
