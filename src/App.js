import { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      text: 'some random text',
      date: '15/04/2022',
      id: crypto.randomUUID(),
    },
    {
      text: 'some random text sdfdfserfgser',
      date: '15/06/2022',
      id: crypto.randomUUID(),
    },
    {
      text: 'some random text oersgnjijresg',
      date: '15/04/2022',
      id: crypto.randomUUID(),
    },
  ]);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text,
      date: date.toLocaleDateString(),
      id: crypto.randomUUID,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && 'dark-mode'} main`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
