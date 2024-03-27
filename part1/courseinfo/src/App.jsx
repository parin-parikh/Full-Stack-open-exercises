const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercises[0]} />
      <Part part={props.part[1]} exercise={props.exercises[1]} />
      <Part part={props.part[2]} exercise={props.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Total Exercises = {props.total}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      Part name = {props.part} 
      <br />
      Number of exercises = {props.exercise}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part={[parts[0].name, parts[1].name, parts[2].name]} exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App