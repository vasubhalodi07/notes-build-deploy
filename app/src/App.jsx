import { useState } from 'react';
import { TrashIcon, PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Welcome to the Notes App! This is your first note." },
    { id: 2, text: "You can add new notes using the input field above." },
    { id: 3, text: "Hover over a note to see the delete button." },
    { id: 4, text: "The notes list is scrollable when it gets too long." },
    { id: 5, text: "Click the delete button to remove a note." },
  ]);
  const [newNote, setNewNote] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([...notes, { id: Date.now(), text: newNote }]);
    setNewNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setNotes(notes.map(note => 
      note.id === id ? { ...note, text: editText } : note
    ));
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              Notes App
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Capture your thoughts, organize your ideas
            </p>
          </div>

          <form onSubmit={addNote} className="mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="flex-1 bg-gray-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 transition-all placeholder-gray-400"
                placeholder="✍️ Write your note here..."
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 font-medium shadow-lg hover:shadow-blue-500/25"
              >
                Add Note
              </button>
            </div>
          </form>

          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar pr-4">
            {notes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No notes yet. Start adding some!</p>
                <p className="text-gray-500 text-sm mt-2">Your ideas matter ✨</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {notes.map((note) => (
                  <li 
                    key={note.id}
                    className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 flex justify-between items-center gap-2 hover:bg-gray-700 transition-all duration-200 border border-gray-600/50"
                  >
                    {editingId === note.id ? (
                      <>
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="flex-1 bg-gray-600/50 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600"
                        />
                        <div className="flex gap-1">
                          <button
                            onClick={() => saveEdit(note.id)}
                            className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-gray-600/50 transition-all"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="text-yellow-400 hover:text-yellow-300 p-2 rounded-lg hover:bg-gray-600/50 transition-all"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-white flex-1 text-sm md:text-base">{note.text}</p>
                        <div className="flex gap-1">
                          <button
                            onClick={() => startEditing(note)}
                            className="text-blue-400 hover:text-blue-300 p-2 rounded-lg hover:bg-gray-600/50 transition-all"
                          >
                            <PencilSquareIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteNote(note.id)}
                            className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-gray-600/50 transition-all"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;