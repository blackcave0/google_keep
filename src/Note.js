import React from "react"
import { Button } from "@material-ui/core"
import { DeleteOutline } from "@material-ui/icons"

const Note =(props)=>{
  const deleteNote =()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
      <div className="note__box">
        <h3>{props.title}</h3>
        {/* <br /> */}
        <p>{props.content}</p>
        <section>
        <Button onClick={deleteNote}>
          <DeleteOutline/>
        </Button>
        </section>
      </div>
    </>
  )
}
export default Note