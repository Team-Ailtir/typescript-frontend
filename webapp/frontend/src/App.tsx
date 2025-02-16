import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [strings, setStrings] = useState<string[]>([]);

  useEffect(() => {
    fetchStrings();
  }, []);

  const fetchStrings = async () => {
    try {
      const response = await fetch('http://localhost:8042/strings');
      const data = await response.json();
      setStrings(data);
    } catch (error) {
      console.error('Error fetching strings:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const response = await fetch('http://localhost:8042/strings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setStrings(data);
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
