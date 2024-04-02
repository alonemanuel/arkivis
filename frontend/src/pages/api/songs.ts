import { NextApiRequest, NextApiResponse } from "next";

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
  if (req.method === "POST") {
    const { title, artist }: SongRequestBody = req.body;

    // Save the song to your data base here
    console.log(`Adding song: ${title} by ${artist}`);
    res.status(200).json({ success: true, message: "Song added successfully" });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
