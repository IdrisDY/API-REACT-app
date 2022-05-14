import React from "react"
import {Spring} from 'react-spring'


function Component1(){
   const clstyle= {
      background: 'steelblue',
      color:'white',
      padding:'1.4rem',
   }
   return(

<Spring from={{opacity:0, marginTop:-500}} to ={{ opacity:1,  marginTop:0}}>
{props => (
   <div style={props}>
   <div style={clstyle} > 
      <h1> Component 1</h1>
      <p> Lorem ipsum How to Comment in CSS. To comment in CSS, simply place your plain text inside /* */ marks. This tells the browser that they are notes and should not be rendered on the front end. </p>
      </div>
      </div>

)}
 </Spring>
      )
}
export default Component1