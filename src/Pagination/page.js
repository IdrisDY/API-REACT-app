import React from "react"
import  axios  from "axios"
// npm install @axios
import { useState } from "react"
import Pagination from "./pagination"
import { useEffect } from "react"
function Page(){
   // fake fetch api i mean its right there
   const  url = "https://jsonplaceholder.typicode.com/posts"
   const[posts, setPosts] = useState([])
   const[loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [postperpage, setPostperpage] = useState(10)

// *need to understand how the argument is coming
   const paginate = (PageNumber)=>{
      setCurrentPage(PageNumber)
   }
//useeffect to fetch Api using AXIOS
   useEffect(()=>{

      setLoading(true)
      const fetchPosts =  async () =>{
         const res = await axios.get(url);
         setPosts(res.data)
         console.log(res)
            setLoading(false)
              
   }
fetchPosts();
},[])
// Loading screen 
if(loading){
return(<div className="bg-grey-500 text-black-400 font-lg"> Loading...</div>)
}
// Getting the current posts
const indexofLastpost = currentPage * postperpage;
const indexofFirstPost = indexofLastpost - postperpage;
const currentPosts = posts.slice(indexofFirstPost,  indexofLastpost)
   return(

      <div> 
     <span> My Blog</span>
      <h1>
         { currentPosts.map((post)=>{
            const{id,  title } = post;
            return(<div key={id} className="   flex  w-1/2 justify-between  m-2 border font-1 list-disc">
           <span className="text-sm"> No{id}</span>
           <p className="w-100% flex text-sm flex-col text-black"> {title} </p> 
             </div>)
         })}
      </h1>
      <Pagination postsperpage={postperpage} totalPosts={posts.length} paginate={paginate}/>
      </div>
   )
    // Pagination above has props passed to it which is now initialised to a variable here.
}
export  default Page