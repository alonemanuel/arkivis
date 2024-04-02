import { FC, FormEvent, useState } from "react";

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

  const handleSubmit = async (event: FormEvent) => {
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
    </div>
  );
};

export default Music;
