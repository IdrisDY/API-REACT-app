import React, { useEffect, useState } from "react"
const url = "https:// api.github.com/users/tj"

export default function Ouser(){
   const [isLoading, setisLoading] = useState(true)
const [isError,setisError] = useState(false)
const [user, setUser] = useState("default user")
   
useEffect(()=>{
   fetch(url).then((resp => resp.json()))
   .then(data =>console.log(data))
   .catch((err => console.log(err)));
})

if (isLoading){
      return(
         <div> </div>
      )}
      if(isError){
         return(
            <div> Error...</div>
         )
      }
return(
      <div>
<h1> {user} </h1>
      </div>
   )
}
