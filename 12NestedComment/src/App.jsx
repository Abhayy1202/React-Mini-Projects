import React from "react"
import NestedComments from "./components/nested-comment"
import CommentData from "./data/comment.json"

function App() {

  return (
  <div>
    <h1>Nested Comment System</h1>
    <NestedComments 
    comments={CommentData}
    onSubmit={()=>{}}
    onEdit={()=>{}}
    onDelete={()=>{}}
    onUpvote={()=>{}}
    onDownvote={()=>{}}/>
  </div>
  )
}

export default App
