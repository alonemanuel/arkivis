/**
 * Note Modal Component
 * 
 * Modal dialog for creating and editing notes.
 * Includes form validation and submission handling.
 */

import React, { useState, useEffect, useRef } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { Note } from '../../types/Note';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (noteData: { title: string; content: string }) => Promise<void>;
  note?: Note; // If provided, we're editing an existing note
  isLoading?: boolean;
}

const NoteModal: React.FC<NoteModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave,
  note,
  isLoading = false
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');
  const titleInputRef = useRef<HTMLInputElement>(null);
  
  // Reset form state when modal opens/closes or note changes
  useEffect(() => {
    if (isOpen) {
      // If editing an existing note, pre-populate the form
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        // Otherwise, start with empty form
        setTitle('');
        setContent('');
      }
      setTitleError('');
      
      // Focus on title input when modal opens
      setTimeout(() => {
        titleInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, note]);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }
    
    // Submit form
    try {
      await onSave({ title, content });
      onClose();
    } catch (error) {
      // Error handling is managed by the parent component
      console.error('Error saving note:', error);
    }
  };
  
  // Handle keyboard shortcut for submission
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl/Cmd + Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={note ? 'Edit Note' : 'Create New Note'}
      className="w-full max-w-2xl"
    >
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {/* Title input */}
        <div className="mb-4">
          <input
            ref={titleInputRef}
            type="text"
            id="note-title"
            className={`w-full text-xl font-bold px-0 py-2 border-0 border-b-2 ${
              titleError ? 'border-red-500' : 'border-gray-200 dark:border-[#3A1378]'
            } bg-transparent focus:ring-0 focus:border-arkivis-neonPurple placeholder-gray-400 dark:placeholder-gray-500`}
            placeholder="Untitled Note"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value.trim()) setTitleError('');
            }}
            aria-describedby={titleError ? "title-error" : undefined}
          />
          {titleError && (
            <p id="title-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {titleError}
            </p>
          )}
        </div>
        
        {/* Content textarea */}
        <div className="mb-6">
          <textarea
            id="note-content"
            className="w-full min-h-[200px] resize-y p-2 border rounded-md border-gray-200 dark:border-[#3A1378] bg-transparent focus:ring-1 focus:ring-arkivis-neonPurple focus:border-arkivis-neonPurple placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Start writing your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Note'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NoteModal; 