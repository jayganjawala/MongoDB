const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    const database = client.db('navigcollection');
    await database.createCollection("pract3", function (error, response) {
      if (error) {
        throw error;
      }
    });
    console.log("collection is created.....")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);