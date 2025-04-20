/**
 * Notes Page Component
 * 
 * Main view for displaying, creating, and managing user notes.
 * Shows either a list of notes or an empty state with a call-to-action.
 */

import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import NoteModal from '../components/notes/NoteModal';
import { useToast } from '../components/ui/ToastProvider';
import { noteService } from '../services/noteService';
import { Note } from '../types/Note';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);
  const [highlightedNoteId, setHighlightedNoteId] = useState<string | null>(null);
  const { showToast } = useToast();

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        const fetchedNotes = await noteService.getNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
        showToast('error', 'Failed to load notes. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [showToast]);

  // Handle opening the create note modal
  const handleOpenCreateModal = () => {
    setSelectedNote(undefined);
    setIsModalOpen(true);
  };

  // Handle creating or updating a note
  const handleSaveNote = async (noteData: { title: string; content: string }) => {
    try {
      setIsLoading(true);
      
      let savedNote: Note;
      if (selectedNote) {
        // Update existing note
        savedNote = await noteService.updateNote(selectedNote.id, noteData);
        setNotes(prev => prev.map(note => 
          note.id === savedNote.id ? savedNote : note
        ));
        showToast('success', 'Note updated successfully!');
      } else {
        // Create new note
        savedNote = await noteService.createNote(noteData);
        setNotes(prev => [...prev, savedNote]);
        showToast('success', 'Note created successfully!');
      }
      
      // Highlight the newly created/updated note
      setHighlightedNoteId(savedNote.id);
      setTimeout(() => setHighlightedNoteId(null), 2000);
      
    } catch (error) {
      console.error('Error saving note:', error);
      showToast('error', 'Failed to save note. Please try again.');
      throw error; // Re-throw to keep modal open
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Notes</h1>
        <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight">
          Create, edit and organize your thoughts
        </p>
      </div>
      
      {/* Note creation button */}
      <div className="mb-6">
        <Button 
          onClick={handleOpenCreateModal}
          className="flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Note
        </Button>
      </div>

      {/* Note cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length === 0 ? (
          // Empty state
          <div className="card p-6 col-span-full flex flex-col items-center justify-center text-center h-48">
            <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4">
              You don't have any notes yet. Create your first note to get started.
            </p>
            <Button 
              variant="secondary"
              onClick={handleOpenCreateModal}
            >
              Create Note
            </Button>
          </div>
        ) : (
          // Note cards
          notes.map(note => (
            <Card 
              key={note.id} 
              className={`p-4 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                highlightedNoteId === note.id ? 'ring-2 ring-arkivis-neonPurple scale-105' : ''
              }`}
              onClick={() => {
                setSelectedNote(note);
                setIsModalOpen(true);
              }}
            >
              <h3 className="font-medium text-lg mb-2 line-clamp-1">{note.title}</h3>
              <p className="text-sm text-arkivis-mutedDark dark:text-arkivis-mutedLight line-clamp-3">
                {note.content}
              </p>
              <p className="text-xs text-arkivis-mutedDark dark:text-arkivis-mutedLight mt-3">
                {new Date(note.updatedAt).toLocaleDateString()}
              </p>
            </Card>
          ))
        )}
      </div>

      {/* Note modal */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
        note={selectedNote}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Notes; 