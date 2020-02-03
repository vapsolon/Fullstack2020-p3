import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Notification from './components/Notification'
import Persons from './services/Persons'
import './index.css'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const addName = (e) =>{
        e.preventDefault()
        if(persons.filter(person => person.name === newName).length > 0){
            window.alert(newName + ' already exists in the phonebook')
        }
        else{
            const newPerson = {name:newName, number:newNumber}
            Persons
            .create(newPerson)
            .then(response =>{
                setPersons(persons.concat(response.data))
                setErrorMessage("Person " + newName + " added successfully")
                setNewName('')
                setNewNumber('')
                setTimeout(() =>{
                    setErrorMessage(null)
                }, 2000)
            })
        }
    }
    
    //Kohtuullisen laajamittainen sekasotku mutta toimii
    const deletePerson = (e) =>{
        e.preventDefault()
        const id = e.target.id
        let name = "aaa"
        Persons.get(id)
        .then(response =>{
            name = response.data.name
            if(window.confirm("Would you like to delete " + name + "?")){
                Persons
                .del(id)
                .then(response =>{
                    setPersons(persons.filter(n => n.id !== Number(id)))
                    setErrorMessage("Person " + name + " deleted successfully")
                    setTimeout(() =>{
                        setErrorMessage(null)
                    }, 2000)
                })
            }
        })
    }

    const nameChange = (e) =>{
        setNewName(e.target.value)
    }
    const numberChange = (e) =>{
        setNewNumber(e.target.value)
    }
    
    useEffect(() =>{
        Persons
        .getAll()
        .then(response =>{
            setPersons(response.data)
        })
    }, [])
    
    return(
        <div>
            <h2>Phonebook</h2>
                <Notification message={errorMessage}/>
                <form onSubmit={addName}>
                    <div>
                        Name: <input value={newName} onChange={nameChange} /> <br/>
                        Number: <input value={newNumber} onChange={numberChange} />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            <h2>Numbers</h2>
            <Phonebook persons={persons} handler={deletePerson}/>
        </div>
    )
}

export default App