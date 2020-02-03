import React from 'react'

const Person = ({id, person, handler}) =>{
    return(
        <div>
            <p>{person.name}: {person.number}</p>
            <form onSubmit={handler} id={id}>
                <button type="submit">Delete</button>
            </form>
        </div>
    )
}

export default Person