import React, { useEffect } from "react"
import { useState } from "react";

function GitUsers(){
   
   const [value, setValue] = useState(0);
useEffect(()=>{
   document.title = `${value} users`
})
   return(
      <>
         <div className=" flex font-bold"> Users {value} </div>
         <button onClick={() =>setValue(value+1)}> Click me please </button>
      </>
   )
}

export default GitUsers;