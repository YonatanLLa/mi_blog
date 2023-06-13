const { Router } = require("express");
const router = Router();
const {
	pruebas,
	temas,
	creates,
	getItem,
	one,
} = require("../controllers/articulos.js");
const { on } = require("nodemon");

// Rutas de prueba
router.get("/ruta-prueba", pruebas);
router.get("/curso", temas);

// Route util
router.post("/create", creates);
router.get("/articles/:last?", getItem);
router.get("/articles/:id", one);


module.exports = router;
