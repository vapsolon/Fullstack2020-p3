import React from 'react'

const Part = ({part}) =>{
    return(
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const Header = ({name}) =>{
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({parts}) =>{
    return(
        <div>
            {parts.map((part, i) =>
                <Part key={i} part={part} />
            )}
        </div>
    )
}

const Total = ({parts}) =>{
    const total = parts.reduce((sum, cur) => sum + cur.exercises, 0)
    return(
        <div>
            <p>Number of exercises: {total}</p>
        </div>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course