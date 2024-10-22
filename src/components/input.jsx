import "../components/input.css"
import { useState } from "react"


function Input(props)
{

    const [Todo,setTodo]=useState(" ");
    return (
        <>

            <div className="container">


           <div className="head">
               <div className="todo"><h1>Todo App</h1></div>
           <input type="text"
               placeholder="Enter Todo"
               className="input"
               value={Todo}
               onChange={e=>
            {
                setTodo(e.target.value)
                
                
            }
           } />
           <button className="btn" onClick={()=>
            {
                props.addlist(Todo)
                setTodo("")
                

            }
           } >+</button>
           
           </div>
            </div>

        </>
    )
}

export default Input;