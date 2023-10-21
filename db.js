const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const db = client.db("fundex");


const run = async () => {
    try {
        await client.connect();
    } finally {
        console.log("Database Connected");
    }
};

run().catch(console.dir);

module.exports = db;