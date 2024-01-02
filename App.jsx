
// import './App.css'

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";

function App() {

  const todoItems=[{
    Name:"buy milk",
    dueDate:"20/12/2023",

  },
  {
    Name:"buy maggie",
    dueDate:"20/12/2023",

  },
  {
    Name:"complete work",
    dueDate:"20/12/2023",

  }

];
  
  return (<div>
    <AppName/>
    <AddTodo/>
    
    
    <TodoItems todoItems={todoItems} />
{/* 
    <Todoitem todoName="prashant" todoDate="30/12/2023"/>
    <Todoitem todoName="going to college" todoDate="31/12/2023"/> */}
   


</div>)


    

}

export default App;
