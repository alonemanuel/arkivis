import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';
import { fetchNotes, createNote } from '../services/api';

interface NotesPageProps {
    user: any;
}

const NotesPage: React.FC<NotesPageProps> = ({ user }) => {
    const [notes, setNotes] = useState<string[]>([]);

    useEffect(() => {
        const loadNotes = async () => {
            const fetchedNotes = await fetchNotes();
            setNotes(fetchedNotes.map((note: { content: string }) => note.content));
        };
        loadNotes();
    }, []);

    const handleNoteSubmit = async (noteContent: string) => {
        const newNote = await createNote(noteContent);
        setNotes([...notes, newNote.content]);
    };

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <NoteInput onNoteSubmit={handleNoteSubmit} />
            <NoteList notes={notes} />
        </div>
    );
};

export default NotesPage;
