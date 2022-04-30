import React, { useState } from "react";
import {data} from "./data.js";
function Errexample(){
   const [task, setTask] = useState("Gardening")
   const [user, setUser] = useState(data)
   const[tools,setTools] = useState({type:"Spade", number:4, use:"building"})
   const changeTask= ()=>{
    if(task === "gardening"){
setTask("washing plates") 
}
else{
   setTask("gardening")
}
   }
   const removeId = (id) =>{
      const newP = user.filter((person) =>person.id !== id);
      setUser(newP)
   }
   const changetool=()=>{
      setTools({ ...tools, type:"hoe"})
   }
   return(
      <>
         <h1 id="th1">  {task} </h1>
      <button  className="btn border-1 rounded-sm bg-cyan-400 p-2" onClick={changeTask}> Change title</button>
     {   user.map((person) =>{
      const{id , name} = person;
      return(
         <>
         <div className="item  flex flex-row justify-between my-5" key={id}> i am number {id} and my name is {name} 
          <button  className="btn border-1 rounded-sm bg-cyan-400 px-5" onClick={()=>removeId(id)}> removeId</button>
         </div> 
   </>
      )
   })}
<button className="btn border-1 rounded-sm bg-cyan-400 px-5" onClick={()=>setUser([])}> Clear </button>
      
      
      <h2> {tools.name}</h2>
      <h2>{tools.number}</h2>
      <h2>{tools.use}</h2>
      <button onClick={changetool}> Change tool</button>
      </>
   )
}

export default Errexample