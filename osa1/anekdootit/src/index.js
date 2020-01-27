import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Globaalit muuttujat pitämään kirjaa suurimmasta äänisaaliista ja sen omistajasta
let mostVoted = 0
let mostVotes = 0

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const Anecdote = (props) =>{
    return(
        <div>
            <p>{props.anecdotes[props.selected]}</p>
            <p>Has {props.votes[props.selected]} votes</p>
        </div>
    )
}
        

const Heading = (props) =>{
    return(
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const handleNext = () =>{
        setSelected(Math.floor((Math.random() * anecdotes.length)))
    }
    
    const handleVote = () =>{
        const copy = {...votes}
        let newVotes = copy[selected] + 1
        copy[selected] = newVotes
        setVotes(copy)
        if(newVotes > mostVotes){
            mostVotes += 1
            mostVoted = selected
        }
    }

    return (
        <div>
            <Heading text="Anecdote of the Day" />
            <Anecdote anecdotes={props.anecdotes} selected={selected} votes={votes} />
            <Button onClick={handleVote} text="Vote" />
            <Button onClick={handleNext} text="Next Anecdote" />
            <Heading text="Most Popular Anecdote" />
            <Anecdote anecdotes={props.anecdotes} selected={mostVoted} votes={votes} />
        </div>
    )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)