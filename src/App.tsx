import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [strings, setStrings] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setStrings([...strings, text]);
      setText('');
    } catch (error) {
      console.error('Error adding string:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>String List App</h1>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          <button type="submit">Add</button>
        </form>
        <table className="strings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {strings.map((str, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{str}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
