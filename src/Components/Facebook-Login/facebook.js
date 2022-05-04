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
 else {   fbcontent = (<FacebookLogin
   appId="738810583789550"
   autoLoad={true}
   fields="name,email,picture"
   onClick={this.componentClicked}/>)
   console.log(fbcontent)
}
return(<div className="flex flex-col "> Hello User Link your Facebook Account
 <button className="flex flex-start py-0">{fbcontent}
 </button>
 </div>)
}
}