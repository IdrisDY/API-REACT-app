import React from 'react'

export default function Grow() {

/* Filtering out the odd numbers from the array.
The array method filter just brings out the element 
The filter method has a parameter that loops through each element in array and the return value is th
condition the element returned validates */
   const arr = [2,4,6,8,9,50]
   const odd  = arr.filter(no=>!(no%2 === 0))
  return (
    <div>Grow
    {odd} is the only one standing out
    </div>
  )
}
