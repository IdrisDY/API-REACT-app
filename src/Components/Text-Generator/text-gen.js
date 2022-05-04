import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Select from "./select"
import OutText from "./text-output"
function TextGen (){
   const[words, setWords] =useState({ paras:5, format:"html", type:'meat-and-filler', content:''})
   // declaring objects in state
   const[loading,setLoading] = useState(false)
   const gettext= async () =>{
      setLoading(true)

      const res = await axios.get ("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=html")
      if(res){
         setWords({...words, content:res.data})
         //spread bcos i am not changing every ppt
         setLoading(false)
         //asynchronous work fr
      }
         console.log(words)
   }


   useEffect(()=>{
     gettext()
   }, [])

   if(loading) 
   return <div> Loading ...</div>
   
return(
   <div> 
   <div> 
   <h1 className="font-xl text-cyan-800 underlined "> ReactJS Sample Text Generator </h1>
   <hr/>
   </div>
   <form>
   <label> Include  HTML: </label>
   <Select value = {words.format} />

   </form>
   <OutText value = {words.content}/>
   </div>
)

}
export default TextGen;



