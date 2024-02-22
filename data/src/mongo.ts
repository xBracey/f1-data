import { MongoClient, type Filter, type FindOptions } from "mongodb";

const host = "192.168.1.163";
const url = `mongodb://${host}:27017`;
const dbName = "enwiki";

const client = new MongoClient(url);

export const getDataFromMongo = async (stringMatch: string, limit = 1000) => {
  await client.connect();
  console.log("Connected to the server");

  const database = client.db(dbName);

  const article = database.collection("pages");

  const articlesWithCategory = await article
    .find({
      categories: {
        $elemMatch: {
          $regex: stringMatch,
        },
      },
    })
    .limit(limit)
    .toArray();

  await client.close();

  return articlesWithCategory;
};
