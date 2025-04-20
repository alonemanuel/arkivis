/**
 * Note Service
 * 
 * Handles API operations related to notes.
 */

import { Note } from '../types/Note';

// Mock API for now - would be replaced with actual API calls
const API_DELAY = 500; // simulate network delay

export const noteService = {
  // Get all notes for the current user
  getNotes: async (): Promise<Note[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock data - would be replaced with actual API call
        resolve([]);
      }, API_DELAY);
    });
  },

  // Create a new note
  createNote: async (noteData: Pick<Note, 'title' | 'content'>): Promise<Note> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock data - would be replaced with actual API call
        const newNote: Note = {
          id: `note-${Date.now()}`,
          title: noteData.title,
          content: noteData.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: 'current-user-id', // Would come from auth context in real app
        };
        resolve(newNote);
      }, API_DELAY);
    });
  },

  // Update an existing note
  updateNote: async (id: string, noteData: Partial<Note>): Promise<Note> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Would update note in real API
        const updatedNote: Note = {
          id,
          title: noteData.title || '',
          content: noteData.content || '',
          createdAt: noteData.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: 'current-user-id',
        };
        resolve(updatedNote);
      }, API_DELAY);
    });
  },

  // Delete a note
  deleteNote: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Would delete note in real API
        resolve();
      }, API_DELAY);
    });
  }
}; 