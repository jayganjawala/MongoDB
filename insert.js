const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
    try {
        var nodetestDB = client.db("navigcollection"); //here 
        var pract = [
            { _id: 11, name: "Chaman Gautam", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" },
            { _id: 12, name: "Shivani", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" },
            { _id: 13, name: "Menu", address: "Harvansh nagar Ghaziabad", orderdata: "Top" },
            { _id: 14, name: "Brajbala", address: "Harvansh nagar Ghaziabad", orderdata: "Dinig table" },
            { _id: 15, name: "Ramsaran", address: "Harvansh nagar Ghaziabad", orderdata: "Washing machine" },
            { _id: 16, name: "Dheeraj", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" }
        ]
        var customersCollection = nodetestDB.collection("pract3");
        await customersCollection.insertMany(pract, function (error, response) {
            if (error) { throw error; }
        });
        console.log("Many document inserted");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);