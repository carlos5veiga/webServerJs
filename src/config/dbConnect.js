import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.MONGODB_KEY);
    return mongoose.connection;
}

export default conectaNaDatabase;