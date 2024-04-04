import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";

import TodoItem2 from "./components/TodoItem2";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
