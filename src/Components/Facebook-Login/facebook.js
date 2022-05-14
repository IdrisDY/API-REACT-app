import React, { Component } from "react"
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component
{
   state={
      isLoggedin:false,
      userID: '',
      name: '',
      email:'',
      picture:''

   }
/* A function that is called when the button is clicked. */
   componentClicked= ()=>{
      console.log('clicked')
   }
   responseFacebook = response =>{
         console.log(response)
   }

   render(){
      let fbcontent;
      console.log(fbcontent)

/* Checking if the user is logged in. */
      if(this.state.isLoggedin){
         fbcontent = null;
 }
/* A function that is called when the button is clicked. */
 else {  
    
   fbcontent = (<FacebookLogin
   appId="738810583789550"
   autoLoad={true}
   fields="name,email,picture"
   size= 'small'
   onClick={this.componentClicked}/>)
   console.log(fbcontent)
}
return(<div className="flex flex-col "> Hello User Link your Facebook Account
 <button className="flex flex-start py-0">{fbcontent}
 </button>
 </div>)
}
}