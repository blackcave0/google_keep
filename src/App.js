import React from 'react'
import { useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import CreateNote from './CreateNote';
import Note from './Note'

const App = () => {

  const [addItem, setAddItem] = useState([])
  const addNote = (createNote) => {
    // alert("Clicked")
    setAddItem((oldData) => {
      return [...oldData, createNote]
    })
    // console.log(createNote)
  }

  const onDelete = (id) => {
    setAddItem((prevData) => {
      return prevData.filter((currData, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
     
      <div className="appBox__container">
        {
          addItem.map((currValue, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={currValue.title}
                content={currValue.content}
                deleteItem={onDelete}
              />
            )
          })
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
