import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Todo from './Components/Todo.jsx';
import background from './background.png';
import ContactForm from './Components/ContactForm.jsx';

function App() {

  return (
    <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',

  }}>
      <header className="header">
        <Header/>
      </header>
      <main className="container">
        <Todo/>
      </main>
    </div>
  );
}

export default App
