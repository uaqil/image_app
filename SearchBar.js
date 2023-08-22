import React, { useState } from "react"




const SearchBar = ({ onSubmit }) => {


	const[term, setTerm]=useState('')

const handleFormSubmit = (event) => {
	event.preventDefault();
	onSubmit(term)
}
const handleChange = (event) => {
setTerm(event.target.value)
};

  return (
    <div>
		<form onSubmit={handleFormSubmit}>
			<input value={term} onChange={handleChange}></input>
		</form>  
    </div>
  )
}

export default SearchBar
//Handling text inputs 1- create a new piece of state, 2- create an event handler to watch for the onChange event, 3- when the onChange event fires get the value from the input,4-take that value from the input and used it to update the state, 5-pass the state to the input as the value prop  
// value={} = what it actually does? it forces the input to always display "what you have written there as solid code or some state values"



