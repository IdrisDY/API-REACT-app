import { useState } from "react"

/**
 * It takes a prop, and returns a div with the prop's value.
 * @param props - the props that are passed to the component
 */
const OutText=(props)=> {
   const[init, setInit] =useState(props.value)
   return(
      <div> 
      {props.value}
      </div>
   )


}
export default OutText
