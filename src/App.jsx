import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteDetails from './components/NoteDetails';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [viewArchived, setViewArchived] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', tags: '', content: '' });
  const [showCreateNoteForm, setShowCreateNoteForm] = useState(false);
  const [showEditNoteForm, setShowEditNoteForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);


  const filteredNotes = notes.filter(note => {
    const query = searchQuery.toLowerCase();
    const isArchived = viewArchived ? note.archived : true;
    return (
      (note.title.toLowerCase().includes(query) ||  note.content.toLowerCase().includes(query) || note.tags.some(tag => tag.toLowerCase().includes(query))) 
      && isArchived
    );
  });

  function addNote() {
    if (!newNote.title || !newNote.content) return;
    const note = {
      id: Date.now(),
      title: newNote.title,
      tags: newNote.tags.split(',').map(tag => tag.trim()),
      content: newNote.content,
      date: new Date().toLocaleDateString(),
      archived: false,
    };
    setNotes([note, ...notes]);
    setNewNote({ title: '', tags: '', content: '' });
    setShowCreateNoteForm(false);
  }

  function archiveNote(id) {
    setNotes(notes.map(n => (n.id === id ? { ...n, archived: true } : n)));
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
    setSelectedNote(null);
  }

  function updateNote(updatedNote) {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setSelectedNote(updatedNote);
    setShowEditNoteForm(false);
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        notes={filteredNotes}
        setSelectedNote={setSelectedNote}
        setViewArchived={setViewArchived}
        setSearchQuery={setSearchQuery}
        setShowCreateNoteForm={setShowCreateNoteForm}
        viewArchived={viewArchived}
      />
      <div className="flex-1 p-6 overflow-y-auto">

        {showCreateNoteForm && (
          <CreateNote
            newNote={newNote}
            setNewNote={setNewNote}
            addNote={addNote}
            setShowCreateNoteForm={setShowCreateNoteForm}
          />
        )}

        {showEditNoteForm && selectedNote && (
          <EditNote
            note={selectedNote}
            setNote={setSelectedNote}
            updateNote={updateNote}
          />
        )}

        {!showCreateNoteForm && !showEditNoteForm && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map(note => (
              <NoteDetails
                key={note.id}
                note={note}
                archiveNote={archiveNote}
                deleteNote={deleteNote}
                setShowEditNoteForm={setShowEditNoteForm}
                setSelectedNote={setSelectedNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
