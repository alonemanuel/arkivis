import { Song } from "@/interfaces/Song";
import { FC, FormEvent, useEffect, useState } from "react";

interface SongFormState {
  title: string;
  artist: string;
}

interface APIResponse {
  success: boolean;
  message: string;
}

const Music: FC = () => {
  const [formState, setFormState] = useState<SongFormState>({
    title: "",
    artist: "",
  });

  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = async () => {
    const response = await fetch("/api/songs");
    const data: Song[] = await response.json();
    setSongs(data);
  };

  useEffect(() => {
    // Fetch the songs when the component mounts

    fetchSongs();
  }, []); // Empty dependancy array means this runs once on mount

  const handleSubmit = async (event: FormEvent) => {
    console.log(`Handling submit`);
    event.preventDefault();

    // Call your backend API to store the song
    const response = await fetch("/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const data: APIResponse = await response.json();

    if (data.success) {
      console.log(data.message);
      // Reset form state or give user feedback
      setFormState({ title: "", artist: "" });
    }

    // After adding a new song, fetch the list again to update the UI
    fetchSongs();
  };

  return (
    <div>
      <h1>Add a new song</h1>
      <form onSubmit={handleSubmit}>
        {/* Song Title input */}
        <input
          type="text"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
          placeholder="Song title"
          required
        />

        {/* Song Artist input */}
        <input
          type="text"
          value={formState.artist}
          onChange={(e) =>
            setFormState({ ...formState, artist: e.target.value })
          }
          placeholder="Song artist"
          required
        />

        <button type="submit">Add Song</button>
      </form>
      <ul>
        {songs.map((song) => (
          <li key={song._id.toString()}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
