import React, { useRef,useEffect, useState } from "react"

  export default function Thors(){

   const url = "https://course-api.com/react-tours-project"
 const[tourview, setTourview] = useState([])
 const[loading, setisLoading] = useState(true)
 const[bottom, setBottom] = useState(true)
 const [shortenText, setShortenText] = useState(true)
 const [del, setDel] = useState(0)

 async function Gettours (){
   const resp = await fetch(url)
   const data = await resp.json()
   setTourview(data)
   setisLoading(false)
   console.log('not console fault')
}

   useEffect(() =>{
      Gettours()
   }
   , []
   )
// function to shorten the string yeah parameter is the text, 0, 200 index of to be sliced strings
const handleText = text =>{
   return shortenText? `${text.slice(0,200)} ...`: `${text.slice(0)}`
}
const handleTextButton = () => (shortenText ? "Show more" : "Show Less")
   const handleDelete = (id) => {
      setTourview((views) => views.filter((view) =>view.id !== id));
      setDel(del+1)
    };
  

const dialog =()=>{
Gettours();
}



   if(loading){
      return(
         <div className="font-bold text-cyan-800"> Loading ... </div> 
      )}
  if(del === 5){
     return(
        <div>
                <button onClick={()=>{setDel(6)}} > Refresh Page</button>

        </div>
     )
  }
  if(del ===6){
     return(<Thors/>)
  }
   return(
<div  className="flex flex-col justify-center items-center"> I dey move
   {tourview.map((view) => {
      const {image,info,name,price, id} = view;
return(
   <div key={id} className="flex  flex-col  mb-7 shadow-md w-1/2 ">
    <img  src={image} className="rounded-sm"/>
    <div className="flex justify-between w-100% p-4">
       <p> {name} </p>
       <span className="text-cyan-700 bgcolor-grey-700"> ${price} </span>
   </div>
<div  className="p-3">
<h4> {handleText(info)} </h4>
<button onClick= /* A function that is being called on the button click. */
{() => setShortenText((prev) => !prev)}> <a href=''>  {handleTextButton()}</a> </button>
</div>
    <button id="btn"  onClick={()=>handleDelete(id)}> Not Interested</button>
     </div>
)
   })}
   <div> </div>
</div>

   )
}

