import { useEffect, useState } from "react";
import classes from './style.module.css';
import Todoitem from './components/todo-item'
import TodoDetails from "./components/todo-item/todo-details";
import { Skeleton } from "@mui/material";


function App() {
 const[loading,setLoading] = useState(false);
const [todolist,setTodolist] = useState([]);
const[errorMsg,setErrorMsg] = useState(null);
const[todoDetails,setTodoDetails] = useState(null);
const[openDialog,setOpenDialog] = useState(false);


async function fetchListofTodos(){
  try {
    setLoading(true);
    const apiResponse = await fetch('https://dummyjson.com/todos');
    const result = await apiResponse.json();

    console.log(result);
    if(result?.todos && result?.todos?.length > 0){
      setTodolist(result?.todos);
      setLoading(false);
      setErrorMsg('');
    }else{
      setTodolist([]);
      setLoading(false);
      setErrorMsg('');
    }
  } catch (e) {
    console.log(e);
    setErrorMsg('Some error occured')
  }
}
async function fetchDetailsofCurrentTodo(getCurrentTodoId){
console.log(getCurrentTodoId);

try {
 const apiResponse = await fetch('https://dummyjson.com/todos/$(getCurrentTodoId)');
const details = await apiResponse.json();
if(details){
  setTodoDetails(details);
  setOpenDialog(true)
}else{
  setTodoDetails(null);
  setOpenDialog(false)
}
console.log(result);
} catch (error) {
  console.log(error);
}
}
useEffect(()=>{
fetchListofTodos()
},[])

if(loading) <Skeleton variant="rectangular" width={650} height={650}/>
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo App Using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {
          todolist && todolist.length>0 ?
          todolist.map(todoItem=> <Todoitem fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo} todo={todoItem}/>) :
          null
        }
      </div>
      <TodoDetails 
      setOpenDialog={setOpenDialog}
      openDialog={openDialog}
      todoDetails={todoDetails}
      setTodoDetails={setTodoDetails}
      />
    </div>
  )
}

export default App
