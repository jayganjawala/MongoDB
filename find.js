const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
    try {
        var nodetestDB = client.db("navigcollection"); //here 
        var customersCollection = nodetestDB.collection("pract3");
        const result = await customersCollection.find({}).toArray(function (err) {
            if (err) throw err;
        })
        for (i = 0; i < result.length; i++) { 
            let pract = result[i]; 
            console.log(pract.name + ", " + pract.address + ", " + pract.orderdata);
         }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);