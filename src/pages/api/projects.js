import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    // `mongodb+srv://haruki:${process.env.MONGO_PASS}@cluster0.dqivi.mongodb.net/projects?retryWrites=true&w=majority`
    "mongodb+srv://haruki:Haru1204@cluster0.dqivi.mongodb.net/projects?retryWrites=true&w=majority"
  );
  const db = client.db();
  const projectsCollection = db.collection("projects");
  const projects = await projectsCollection.find().toArray();

  res.status(201).json({ data: projects });
}
