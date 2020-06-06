import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props)=>{

  return (
    <div>
      
  <h1>{props.course}</h1>
      
    </div>
  )

}

const Part =(props)=>{
return(
<div>
{props.part} - {props.exercise}
</div>

)

}

const Content =(props)=>{
  const part1='Fundamentals of react'
  const exercise1 = 10;
  const part2 = 'Using props to pass data';
  const exercise2 = 7;
  const part3 ='State of a component';
  const exercises3 = 14;
return(
<div>

<Part part={part1} exercise = {exercise1} />
      <Part part={part2} exercise = {exercise2} />
      <Part part={part3} exercise = {exercises3} />
</div>

)
}

const Total=(props)=>{
return (
<div>
NUmber of exercises is {props.total}
</div>

)

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content/>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))