import React, { useEffect, useState } from "react"

  export default function Thors(){

   document.onscroll = function(event){
      var node = event.target;       
      if (node.scrollHeight - node.scrollTop === node.clientHeight)
      {
           console.log("BOTTOM REACHED:")
      }
   }
   const url = "https://course-api.com/react-tours-project"
 const[tourview, setTourview] = useState([])
 const[loading, setisLoading] = useState(true)
   useEffect(() =>{
      async function Gettours (){
         const resp = await fetch(url)
         const data = await resp.json()
         setTourview(data)
         setisLoading(false)
      }
      Gettours()
   }
   , []
   )
   if(loading){
      return(
         <div className="font-bold text-cyan-800"> Loading ... </div> 
      )}
  
   return(
<div className="flex flex-col justify-center items-center"> I dey move
   {tourview.map((view) => {
      const {image,info,name,price} = view;
return(
   <div className="flex  flex-col  mb-7 shadow-md w-1/2 ">
    <img  src={image} className="rounded-sm"/>
    <div className="flex justify-between w-100% p-4">
       <p> {name} </p>
       <span className="text-cyan-700 bgcolor-grey-700"> ${price} </span>
   </div>
<div  className="p-3">
<h4> {info} </h4>
</div>
    <button id="btn"> Not Interested</button>
     </div>
)
   })}
   <div> </div>
</div>

   )
}

