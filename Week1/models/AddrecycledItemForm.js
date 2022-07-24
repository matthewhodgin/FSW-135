import { useState } from 'react'

function AddrecycledItemForm({ submit, btnText, name, country, _id }) {
    const initialInputs = { name: name || '', country: country || '' };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type ='text'
                name ='name'
                value ={inputs.name}
                onChange ={handleChange}
                placeholder ='Name' />
            <input
                type ='text'
                name ='country'
                value ={inputs.country}
                onChange ={handleChange}
                placeholder ='Country' />
            <button>Add Player</button>
        </form>
    )
}
export default AddrecycledItemForm;