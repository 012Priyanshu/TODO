
import Todo from "./components/input"
import "./App.css"
import { useState } from "react"
import TodoList from "./components/todolist"


const App=()=>
{




const [todolist,setlist]=useState([]);


// to add the item from an list


let addlist=(Todo)=>
{
    setlist([...todolist,Todo])
}

// to delete the item from an list

const deleteitem=(key)=>
{
    let newTodoList=[...todolist]
    newTodoList.splice(key,1)
    setlist([...newTodoList])
}

// to mark as read the item from an list

const MarkedRead=(key)=>
    {
        let NewRead=[...todolist];
       alert("Congratulation.You have completed the task:")
       NewRead.splice(key,1)
       setlist([...NewRead]);
    }









    return (
        <>

            <Todo addlist={addlist}/>
            {todolist.map((listitem,i)=>
            {
                return (<TodoList key={i} index={i} item={listitem} deletItem={deleteitem} changecolor={MarkedRead} />)
            })}
            {/* <TodoList/> */}
        </>
    )
}

export default App;