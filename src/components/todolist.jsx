import "../components/input.css"

import React from "react";

function todolist(props)
{
     return (
        <>
        
       <div className="container">
            <li className="list">
                    {props.item}
                   
                    <i className="fa-solid fa-trash itag" onClick={e=>
                        {
                            props.deletItem(props.index)
                        }
                    }></i>
            <i className="fa-solid fa-check tick" onClick={e=>
                {
                    props.changecolor()
                    
                }
            }
              ></i>
            </li>
        </div>
        </>
    )
}

export default todolist;