const mongoose = require('mongoose')

const connection  = async() => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/mi_blog");

        // prametros dentor de objeto
        // useNewUrlParser: true
        // useUnifiedTopology: true
        // useCreateIndex: true

        console.log("conectado correctamente a la base de datos mi blog");
    } catch (error) {
        console.log(error);
        throw new Error('No se conecto a la base de datos')
    }

}

module.exports = {
    connection
}