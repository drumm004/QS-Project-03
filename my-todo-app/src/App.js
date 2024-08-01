import './App.css';
import TodoCard from './ProjectFiles/TodoCard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODO App
      </header>
      <main>
        <TodoCard des="descriptionTitle" cat="dropdownCategory" pri="radioPriority" per="dayPeriod" />
      </main>
    </div>
  );
}

export default App;
