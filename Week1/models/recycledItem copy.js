import { useState } from 'react';
import AddrecycledItemForm from './AddrecycledItemForm';

function chessPlayer({ deletechessPlayer, editchessPlayer, name, country, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div classname='chessPlayer'>
            { !editToggle ?
              <>
                <h1>Name: {name}</h1>
                <p>Country: {country}</p>
                <button 
                    onClick={() => deletechessPlayer(_id)} 
                    className='delete-btn'>
                    Delete
                </button>
                <button 
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    className = 'edit-btn'>
                    Edit
                </button>
              </>
              :
            <>
            <AddrecycledItemForm 
                name={name}
                country={country}
                _id={_id}
                btnText='Submit Edit' 
                submit={editchessPlayer} />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }
        </div>
    );
}
 
export default chessPlayer;