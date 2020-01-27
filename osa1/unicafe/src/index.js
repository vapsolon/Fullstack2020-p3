import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
    return(
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const Stats = (props) =>{
    return(
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const StatsLine = (props) =>{
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const StatsList = (props) =>{
    const average = () =>{
        return(
            (props.good - props.bad) / props.total
        )
    }
    const positive = () =>{
        return(
            (props.good / props.total * 100) + "%"
        )
    }
    if(props.total === 0){
        return(
            <p>There are no statistics yet</p>
        )
    }else{
        return(
            <div>
                <table>
                    <tbody>
                        <StatsLine text="Good" value={props.good} />
                        <StatsLine text="Neutral" value={props.neutral} />
                        <StatsLine text="Bad" value={props.bad} />
                        <StatsLine text="All" value={props.total} />
                        <StatsLine text="Average" value={average()} />
                        <StatsLine text="Positive" value={positive()} />
                    </tbody>
                </table>
            </div>
        )
    }
}

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGood = () =>{
        setGood(good + 1)
        setTotal(total + 1)
    }
    
    const handleNeutral = () =>{
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    
    const handleBad = () =>{
        setBad(bad + 1)
        setTotal(total + 1)
    }

    return(
        <div>
            <Header text="Give Feedback" />
            <Button onClick={handleGood} text="Good" />
            <Button onClick={handleNeutral} text="Neutral" />
            <Button onClick={handleBad} text="Bad" />
            <Stats text="Statistics" />
            <StatsList good={good} neutral={neutral} bad={bad} total={total} />
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)