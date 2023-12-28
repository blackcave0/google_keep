import React from 'react'
// import { Button } from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: '',
  })

  const InputFunction = (event) => {
    const { name, value } = event.target
    setNote((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }
  // Adding [note] for passing values in <Note/>
  const addEvent = () => {
    // preventDefault()
    props.passNote(note)
    setNote({ title: '', content: '' })
  }
  return (
    <>
      <div className="main__note">
        <div className="inner__box">
          <form>
            <input type="text" placeholder="Title"
              value={note.title} onChange={InputFunction} name="title"
              autoFocus={true}
            />
            <section>
              <textarea cols="30" rows="5"
                placeholder="Write a note..." value={note.content}
                onChange={InputFunction} name="content"
              />
              <AddCircleIcon onClick={addEvent} className="plusIcon" />
            </section>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateNote