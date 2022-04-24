import React, { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users"
 export default function FetchUsers(){
const [users, setUsers] = useState([]);
const Fetch = async() =>{
   const resp = await fetch(url);
   const request = await resp.json()
   console.log(request)
   setUsers(request);
}
useEffect(()=>{
Fetch()
}, []);
   return(
<ul className="users"> 

 {users.map((user) => {
console.log(user)
   const {id,login,avatar_url, html_url} = user;
return(
   <li key={id}> 
<img src= {avatar_url} alt= {login}/>
<h4> {login}</h4>
<a href= {html_url}> Profile</a>
</li>
)
})}

</ul>
   )

}
