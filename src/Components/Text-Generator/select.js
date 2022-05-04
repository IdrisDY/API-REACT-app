import { useState } from "react"
import  React, {Component} from 'react'
class Select extends React.Component{ 
constructor(props){
   super(props);
   this.state = {
      value:props.value
   }
}
   // onChange(e) {
   //    setOption(e.target.value)
   // }
   onChange(e){
      this.setState({value:e.target.value},function(){
         this.props.onChange(this.state.value)
      })
   }
   render(){
   return(
      <div> 
      <select onChange={this.onChange.bind(this)}>  
      <option value = "html"> html</option>
      <option value = "text"> text</option>
      </select>
      </div>
   )

   }
}
export default Select
