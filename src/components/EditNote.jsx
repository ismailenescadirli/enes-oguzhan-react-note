import React, { useState, useEffect } from 'react';

export default function EditNote({ note, setNote, updateNote }) {
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    tags: note.tags.join(', '),  
    content: note.content,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNote = {
      ...note,
      title: editedNote.title,
      tags: editedNote.tags.split(',').map(tag => tag.trim()),  
      content: editedNote.content,
    };

    updateNote(updatedNote); 
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Note</h2>

      <button
        onClick={() => setNote(null)}  
        className="text-blue-500 mb-4"
      >
        &larr; Back to Note Details
      </button>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={editedNote.title}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
          <input
            id="tags"
            name="tags"
            type="text"
            value={editedNote.tags}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>

        <button
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Update Note
        </button>
      </form>
    </div>
  );
}
