import React from 'react';
import { FaArchive, FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function NoteDetails({ note, archiveNote, deleteNote, setShowEditNoteForm }) {
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{note.title}</h2>

      <div className="mb-2">
        <strong>Tags:</strong>
        <p>{note.tags.join(', ')}</p>
      </div>

      <div className="mb-4">
        <strong>Content:</strong>
        <p>{note.content}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setShowEditNoteForm(true)}  
          className="text-blue-500"
        >
          <FaEdit className="inline mr-1" />
          Edit
        </button>

        <div className="flex space-x-2">
          <button
            onClick={() => archiveNote(note.id)}
            className="text-gray-500"
          >
            <FaArchive className="inline mr-1" />
            Archive
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="text-gray-500"
          >
            <FaTrashAlt className="inline mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
