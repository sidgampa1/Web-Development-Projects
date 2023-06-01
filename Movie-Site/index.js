import dotenv from "dotenv"
import app from "./server.js"
import { MongoClient, ServerApiVersion } from 'mongodb'
import reviewsDAO from "./dao/reviewsDAO.js"

dotenv.config();
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.ufcz6ro.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000; 

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewURLParser: true 
    })
    .catch(err => {
        console.err(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await reviewsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    });
