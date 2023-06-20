import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default App;
