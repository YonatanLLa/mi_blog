const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes_article = require("./routes/article");

// inicializar app
console.log("App de node arrancada");

// concta  a la base de datos
connection();
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Rutas pruebas harcodeada
app.use("/api", routes_article);

// crear servidor

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);

});


