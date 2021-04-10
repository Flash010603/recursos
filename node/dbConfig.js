const moongose = require('moongose');

const dbConnection = async() => {
     
    try {
        await moongose.connect( process.env.MONGO_CONECCTION , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online')

    } catch (error) {
        
        console.log(error);
        throw new Error('Error en la conexión de la base de datos');
    }
};

module.exports= dbConnection