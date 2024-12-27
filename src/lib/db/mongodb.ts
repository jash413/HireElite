import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);

clientPromise = client.connect()
  .then(() => {
    console.log("MongoDB connection successful!");
    return client; // Return the client when successful
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    throw err; // Rethrow the error after logging it
  });

export default clientPromise;
