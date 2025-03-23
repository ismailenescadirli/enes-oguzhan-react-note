import React, { useEffect } from 'react';

export default function CreateNote({ newNote, setNewNote, addNote, setShowCreateNoteForm }) {

  useEffect(() => {
    setNewNote({ title: '', tags: '', content: '' });
  }, [setNewNote]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a New Note</h2>

      <button
        onClick={() => setShowCreateNoteForm(false)} 
        className="text-blue-500 mb-4"
      >
        &larr; Back to Notes
      </button>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <input
          id="tags"
          type="text"
          value={newNote.tags}
          onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      <button
        onClick={addNote}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Note
      </button>
    </div>
  );
}
