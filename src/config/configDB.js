import { connect } from 'mongoose';
import { config } from 'dotenv';

config()

const configDB = {
    connect: async function connectDB() {
        try {
            console.log("-->", process.env.MONGODB_URL);
            await connect(process.env.MONGODB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Connect successfully");
        } catch (error) {
            console.log("Connect failure");
        }
    }
}

export default configDB;