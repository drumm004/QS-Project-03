import './App.css';
import TodoList from './Components/TodoList.jsx';
import React from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        TODO App
      </header>
      <main className="cards-container">
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
