import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './Components/TodoList.jsx';

function App(props) {

  const [taskLogs, setTaskLogs] = useState([])
  const addTaskLog = (log) => {
    let logs = [...taskLogs, log];
    setTaskLogs(logs);
  }

  return (
    <div className="App">
      <header className="App-header">
        Today's Todo's
      </header>
      <main className="cards-container">
        <TodoList tasks={taskLogs}/>
        <TodoForm addTaskLog={addTaskLog}/>
      </main>
    </div>
  );
}

//ReactDom.render(<App/>, 
  //document.getElementById('root')




export default App;
