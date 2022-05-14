import { Component } from 'react'
import {Spring} from 'react-spring'
class Comp2 extends Component{
render(){
   const c2style = 
   {
      background: 'slategrey',
      color:'white',
      padding:'1.4rem'
   }
   
   return(
   <Spring from ={{opacity:0}} to={{opacity:1}}  config={{delay:1000, duration:1000}} > 
   {props => (
      <div style={props}>
      <div style ={c2style}> 
      <h1> Component 2</h1>
      <p> Lorem ipsum How to Comment in CSS. To comment in CSS, simply place your plain text inside /* */ marks. This tells the browser that they are notes and should not be rendered on the front end. </p>
      </div>
      </div>
   )}
   </Spring> )
}
}
export default Comp2