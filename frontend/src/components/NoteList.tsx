import React from 'react';

interface NoteListProps {
    notes: string[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div>
            <h3>Your Notes</h3>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
