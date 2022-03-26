import React from "react";
import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/todo/TodoList';

const App = () => {
  
  return (
    <div className="app">
      <h1>this is text</h1>
      <TodoList />
    </div>
  )
}

export default App;