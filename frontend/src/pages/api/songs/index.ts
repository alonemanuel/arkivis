import { Song } from "@/interfaces/Song";
import { NextApiRequest, NextApiResponse } from "next";
import * as c from "../../../constants";
import connectToDatabase from "../../../../lib/db/mongodb";

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
  res: NextApiResponse<Song[] | SongAPIResponse>
) {
  try {
    const db = await connectToDatabase();

    if (req.method === c.REQUEST_TYPE_GET) {
      const songs = await db
        .collection(c.DB_COLLECTION_SONGS)
        .find({})
        .toArray();
      res.status(c.STATUS_OK).json(songs);
    } else if (req.method === c.REQUEST_TYPE_POST) {
      const { title, artist }: SongRequestBody = req.body;
      // Save the song to your data base here
      console.log(`Trying to add song: ${title} by ${artist}`);
      await db.collection(c.DB_COLLECTION_SONGS).insertOne({ title, artist });
      res
        .status(c.STATUS_OK)
        .json({ success: true, message: "Song added successfully" });
      alert(`Song added successfully!`);
    } else {
      res.setHeader(`Allow`, [c.REQUEST_TYPE_GET, c.REQUEST_TYPE_POST]);
      res
        .status(c.STATUS_METHOD_NOT_ALLOWED)
        .json({ success: false, message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.log(`Error in /api/songs handler: ${error}`);
    alert(`Error fetching/posting songs`);
    res
      .status(c.STATUS_BAD)
      .json({ success: false, message: "Internal server error at /api/songs" });
  }
}
