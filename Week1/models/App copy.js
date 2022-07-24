import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import recycledItem from './recycledItem';
import AddrecycledItemForm from './AddrecycledItemForm';

const { default: axios } = require("axios");

function App() {
    const [recycledItems, setrecycledItems] = useState([]);

    useEffect(() => {
        axios.get('/recycledItems')
          .then(res => setrecycledItems(res.data))
          .catch(err => console.log(err))
    }, []);

    const recycledItemsList = recycledItems.map(recycledItem => <recycledItem {...recycledItem} key={recycledItem.name}/>)

    const getrecycledItems = () => {
        axios.get('/recycledItems')
          .then(res => setrecycledItems(res.data))
          .catch(err => console.log(err))
    };

    const addrecycledItem = (newrecycledItem) => {
        axios.post('/recycledItems', newrecycledItem)
          .then(res => {
            setrecycledItems(prevrecycledItems => [...prevrecycledItems, res.data])
        })
        .catch(err => console(err))
    };

    const deleterecycledItem = (recycledItemId) => {
        axios.delete(`/recycledItems/${recycledItemId}`)
          .then(res => {
              setrecycledItems(prevrecycledItems => prevrecycledItems.filter(recycledItem => recycledItem._id !== recycledItemId))
        })
        .catch(err => console.log(err))
    }
    const editrecycledItem = (updates, recycledItemId) => {
        axios.put(`/recycledItems/$(recycledItemId)`, updates)
        .then(res => {
            setrecycledItems(prevrecycledItems => prevrecycledItems.map(recycledItem => recycledItem._id !== recycledItemId ? recycledItem : res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getrecycledItems();
    }, []);

    const recycledItemsList = recycledItems.map(recycledItem => 
        <recycledItem 
            {...recycledItem} 
            deleterecycledItem={deleterecycledItem}
            editrecycledItem={editrecycledItem}
            key={recycledItem.title} />)

    return (
        <div className = 'recycledItem-container'>
            <AddrecycledItemForm 
            btnText='Add recycledItem'
            submit={addrecycledItem} />
            {recycledItemsList}
            </div>
    );
}

export default App;