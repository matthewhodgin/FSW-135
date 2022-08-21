import React, { useState } from 'react'

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

export default function TodoForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const { addTodo } = props

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs, 
      [name]: value 
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addTodo(inputs)
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <button> Add Todo </button>
    </form>
  )
}
