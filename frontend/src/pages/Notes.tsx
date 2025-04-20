/**
 * Notes Page Component
 * 
 * Main view for displaying, creating, and managing user notes.
 * Shows either a list of notes or an empty state with a call-to-action.
 */

import React from 'react';

const Notes: React.FC = () => {
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
        <button className="btn-primary flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Note
        </button>
      </div>

      {/* Note cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Empty state - This would be conditionally rendered if no notes exist */}
        <div className="card p-6 col-span-full flex flex-col items-center justify-center text-center h-48">
          <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4">
            You don't have any notes yet. Create your first note to get started.
          </p>
          <button className="btn-secondary">Create Note</button>
        </div>
        
        {/* Note cards would be mapped here when notes exist */}
        {/* Example:
        {notes.map(note => (
          <div key={note.id} className="card p-4">
            <h3 className="font-medium">{note.title}</h3>
            <p className="text-sm">{note.preview}</p>
          </div>
        ))}
        */}
      </div>
    </div>
  );
};

export default Notes; 