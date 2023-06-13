const validator = require("validator");
const Articles = require("../models/Articles");

const pruebas = (req, res) => {
	return res.status(200).json({
		message: "mensaje prueba",
	});
};

const temas = (req, res) => {
	return res.status(200).json([
		{
			curso: "react",
			alumno: "yonatan",
		},
	]);
};

const creates = async (req, res) => {
	console.log(req.body);
	let parameter = req.body;

	let validator_title =
		!validator.isEmpty(parameter.title) &&
		validator.isLength(parameter.title, { min: 5, max: 25 });
	let validator_contenido = !validator.isEmpty(parameter.content);

	if (!validator_title || !validator_contenido) {
		throw new Error("No se ha validado la informacion");
	}

	const article = new Articles(parameter);

	try {
		const articleSearch = await article.save();
		return res.status(200).json({
			status: "success",
			message: "Articulo creado",
			create: articleSearch,
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			messge: "No se guardo el articulo",
		});
	}
};

const getItem = async (req, res) => {
	try {
		let query = Articles.find({}).sort({ date: -1 });
		if (req.params.last) {
			query = query.limit(3);
		}
		const articles = await query.exec();

		if (!articles || articles.length === 0) {
			return res.status(404).json({
				status: "error",
				message: "No se han encontrado artículos",
			});
		}
		return res.status(200).json({
			status: "success",
			parameter_url: req.params.last,
			contador: articles.length,
			articles: articles,
		});
	} catch (error) {
		return res.status(500).json({
			status: "error",
			message: "Ha ocurrido un error en el servidor",
		});
	}
};

const one = (req, res) => {
	//	Recoger un id l url
	//	Buscador el articulo 
	//	Si no existe devolver error

}

module.exports = {
	pruebas,
	temas,
	creates,
	getItem,
	one,
};
