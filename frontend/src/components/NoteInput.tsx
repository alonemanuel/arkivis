import React, { useState } from 'react';

interface NoteInputProps {
    onNoteSubmit: (note: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onNoteSubmit }) => {
    const [note, setNote] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (note.trim()) {
            onNoteSubmit(note);
            setNote('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteInput;
