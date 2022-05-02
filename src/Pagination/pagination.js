const Pagination=({postsperpage, totalPosts, paginate}) =>{
   const Pagenumber=[];

   // Pagenumber array to loop through the pages
   for (let i = 1;i <= Math.ceil(totalPosts/postsperpage);i++){
      // push array method to add elements
Pagenumber.push(i);
   }
   return(
      <nav>
         <ul className="flex flex-row ">
            {Pagenumber.map(number=>{
               // loop through the array to return each element with the key as number 
               return(<li className="border-2 mx-3 px-1 py-0 bg-blue-300 border-cyan-200 " key={number}>
         
               <a onClick={()=>paginate(number)} className="" href="!#"> {number} </a> </li>)
            })}
         </ul>
      </nav>
   )
}
export default Pagination