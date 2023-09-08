import mongoose from "mongoose";

const DB_LOGIN = `yevhensemenuk`;
const DB_PASSWORD = `EJALf4DPx5vsFdZH`;
const DB_NAME = `test_2`;

const connectDB = async () => {
    try {
        const url = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.i54eqqy.mongodb.net/?retryWrites=true&w=majority`;

        mongoose.set("strictQuery", false);

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: DB_NAME,
        });

        console.log(`✅ DB connected`);
    } catch (error) {
        console.error(`❌`, error);
    }
};

export default connectDB;
