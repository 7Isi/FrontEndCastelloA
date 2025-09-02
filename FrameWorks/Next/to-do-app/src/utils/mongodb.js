import mongoose, { mongo } from 'mongoose';

//arrow function -> conexão
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece a conexão com o banco
        .then(() => console.log("Conectado ao MongoDB"))
        .catch(err => console.error("Erro ao tentar conectar no MongDB", err));
}

export default connectMongo;