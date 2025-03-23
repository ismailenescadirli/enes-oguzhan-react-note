import React from "react";
import { FaArchive, FaTrashAlt, FaEdit } from "react-icons/fa";

export default function NoteDetails({ note, archiveNote, deleteNote, setShowEditNoteForm }) {
  if (!note) return null;
  
  return (
    <div className="w-full sm:w-11/12 md:w-9/12 lg:w-3/4 xl:w-1/2 mx-auto p-4 bg-white border rounded-lg shadow-lg my-4">
      <h2 className="text-xl font-semibold mb-2">{note.title}</h2>

      <div className="mb-2">
        <strong>Tags:</strong>
        <p className="text-sm text-gray-600">{note.tags.join(", ")}</p>
      </div>

      <div className="mb-4">
        <strong>Content:</strong>
        <p className="text-base text-gray-700">{note.content}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
        <button
          onClick={() => setShowEditNoteForm(true)}
          className="text-blue-500 mb-2 sm:mb-0"
        >
          <FaEdit className="inline mr-1" />
          Edit
        </button>

        <div className="flex space-x-2">
          <button
            onClick={() => archiveNote(note.id)}
            className="text-gray-500 mb-2 sm:mb-0"
          >
            <FaArchive className="inline mr-1" />
            Archive
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="text-gray-500 mb-2 sm:mb-0"
          >
            <FaTrashAlt className="inline mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
