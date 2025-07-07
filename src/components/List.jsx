import React from 'react'

const List = ({items,deleteHandler}) => {
  return (
    <div>
      {
          items.map((task,index)=>
            <div key={index}>
               <h6>{task}&nbsp; <button onClick={()=>{deleteHandler(index)}}>Delete</button></h6>
            </div>
           )
      }
    </div>
  )
}

export default List