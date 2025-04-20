/**
 * Note Type Definition
 * 
 * Defines the structure for note objects throughout the application.
 */

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
} 