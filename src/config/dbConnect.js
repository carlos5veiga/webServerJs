import mongoose from "mongoose";
import 'dotenv/config';

async function conectaNaDatabase() {
    mongoose.connect(process.env.MONGODB_KEY);
    return mongoose.connection;
}

export default conectaNaDatabase;