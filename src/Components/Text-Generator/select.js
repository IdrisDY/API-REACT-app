import { useState } from "react"

const Select =(props)=> {
   const[option, setOption] =useState(props.value);

   // onChange(e) {
   //    setOption(e.target.value)
   // }
   return(
      <div> 
      <select>  
      <option value = "true"> Yes</option>
      <option value = "false"> No </option>
      </select>
      </div>
   )


}
export default Select
