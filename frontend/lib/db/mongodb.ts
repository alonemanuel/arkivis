import { Db, MongoClient } from "mongodb";

// Function to connect to the database
// Return a promise that resolves to the Db instance
export default async function connectToDatabase(): Promise<Db> {
  const uri: string = process.env.MONGODB_URI || "";
  if (!uri) throw new Error("MongoDB URI is not defined in .env");

  const client: MongoClient = new MongoClient(uri);
  await client.connect();
  const dbName: string | undefined = uri.split("/").pop()?.split("?").shift();
  const db: Db = client.db(dbName); // Get the database

  return db;
}
