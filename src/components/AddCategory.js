import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({target}) => {

        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);

            setInputValue("")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            className='form-control'
            onChange={handleInputChange}
            value={inputValue}

        />
    </form>
  )
}