import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Select from "./select"
import OutText from "./text-output"
function TextGen (){
   const[words, setWords] =useState({ paras:4, format:"", type:'meat-and-filler'})
   // declaring objects in state
   const[loading,setLoading] = useState(false)


   useEffect(()=>{

      const gettext= async () =>{
         setLoading(true)

         const res = await axios.get ("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=html")
         if(res){
            setWords({...words, format:res.data})
            //spread bcos i am not changing every ppt
            setLoading(false)
            //asynchronous work fr
         }
            console.log(words)
      }
     gettext()
   }, [])

   if(loading) 
   return <div> Loading ...</div>
   
return(
   <div> 
      <Select/>
   magbe oh omo olope ma gbe
   <OutText value = {words.format}/>
   </div>
)

}
export default TextGen;



