const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
    try {
        var nodetestDB = client.db("navigcollection"); //here 
        var customersCollection = nodetestDB.collection("pract3");
        var deleteQuery = { name: 'Shivani' };
        const result = await customersCollection.deleteMany(deleteQuery, function(err) { 
            if (err) throw err; 
        })
        console.log("Many documents deleted");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);