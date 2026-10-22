import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MDB_URI as string);
const db = client.db('l1b14a07-db');

export const auth = betterAuth({
     emailAndPassword: {
          enabled: true,
     },
     database: mongodbAdapter(db, {
          client,
     }),
});