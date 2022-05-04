import { useState } from "react"

/**
 * It takes a prop, and returns a div with the prop's value.
 * @param props - the props that are passed to the component
 */
const obj ={red:2,blue:2,green:4}

console.log({obj})
const OutText=(props)=> {
  /* A hook that is used to store the value of the prop. */
   const[init, setInit] =useState(props.value)
   return(
      <div> 
      {props.value}
      </div>
   )


}
export default OutText
