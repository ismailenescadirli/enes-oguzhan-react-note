import React from 'react';
import { FaRegStickyNote, FaArchive, FaSearch, FaTag } from 'react-icons/fa';  

export default function Sidebar({
  notes,
  setSelectedNote,
  setViewArchived,
  setSearchQuery,
  setShowCreateNoteForm,
  viewArchived,
}) {
  const uniqueTags = [...new Set(notes.flatMap(n => n.tags))];

  return (
    <div className="w-1/4 p-4 border-r flex flex-col justify-between overflow-y-auto">
      <div>
        <div className="text-xl font-bold text-center mb-4">Notes</div>
        <div className="space-y-4">
          <button
            onClick={() => { setViewArchived(false); setSelectedNote(null); }}
            className={`w-full text-left px-2 py-2 rounded ${!viewArchived ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            <FaRegStickyNote className="inline mr-2" />
            All Notes
          </button>

          <button
            onClick={() => { setViewArchived(true); setSelectedNote(null); }}
            className={`w-full text-left px-2 py-2 rounded ${viewArchived ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            <FaArchive className="inline mr-2" />
            Archived Notes
          </button>

          <div className="mt-4 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded border text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 space-y-2">
            {uniqueTags.map(tag => (
              <div
                key={tag}
                onClick={() => setSelectedNote(notes.find(note => note.tags.includes(tag)))}
                className="flex items-center cursor-pointer hover:text-blue-600"
              >
                <FaTag className="text-gray-500" />
                <span className="ml-2">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowCreateNoteForm(true)} 
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          + Create New Note
        </button>
      </div>
    </div>
  );
}
