import React from 'react'
import Person from './Person'

const Phonebook = ({persons, handler}) =>{
    return(
        <div>
            {persons.map((person, i) =>
                <Person key={i} person={person} id={person.id} handler={handler} />
            )}
        </div>
    )
}

export default Phonebook