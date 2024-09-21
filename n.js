const { MongoClient } = require('mongodb');
require('dotenv').config();

console.log('MongoDB URL:', process.env.MONGODB_URL);

const uri = process.env.MONGODB_URL; // Ensure this is set correctly
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Connection failed', error);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
