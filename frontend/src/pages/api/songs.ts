import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/db/mongodb";

// Define an interface for the request body
interface SongRequestBody {
  title: string;
  artist: string;
}

// Define an interface for the API response
interface SongAPIResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SongAPIResponse>
) {
  console.log(`In handler`);
  if (req.method === "POST") {
    const { title, artist }: SongRequestBody = req.body;
    // Save the song to your data base here
    console.log(`Trying to add song: ${title} by ${artist}`);
    try {
      const db = await connectToDatabase();
      await db.collection("songs").insertOne({ title, artist });
      res
        .status(200)
        .json({ success: true, message: "Song added successfully" });
    } catch (error) {
      console.log(`Error connecting to MongoDB: ${error}`);
      res
        .status(500)
        .json({ success: false, message: "Arkivis: Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
