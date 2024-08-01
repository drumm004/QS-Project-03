import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm.jsx';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        TODO App
      </header>
      <main className="cards-container">
        <TodoList/>
        <TodoForm/>
      </main>
    </div>
    
  );
}



export default App;
