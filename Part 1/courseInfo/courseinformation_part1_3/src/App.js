const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.row}</p>
  )
}

const Content = (props) => {
  const rows = []
  for (let i = 0; i < 3; i++) {
    rows.push(<p>{props.parts[i]} {props.exercises[i]}</p>)
  }  
  return (
    <div>
      1.1 version
      {rows}
      1.2 version
      <Part row={rows[0]}/>
      <Part row={rows[1]}/>
      <Part row={rows[2]}/>
    </div>
  )
}

const Total = (props) => {
  let final = 0
  for (let i = 0; i < 3; i++) {
    final = final + props.exercises[i]
  }  
  return (
    <div>
      <p>Number of exercises {final}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises}/>
    </div>
  )
}

export default App