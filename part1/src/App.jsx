const App = () => {
  const course ='Half stack application development'
  const parts = 
  [
    {
      name: 'Fundementals of React',
      exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    }, 
    {
      name: 'state of a component',
      exercises: 14
    }
  ]
  
  return (
    <>
      <Header  course={course} />
      <Content parts={parts} />
      <Total exercises={parts.exercises}/>
    </>
  );
}

const Header = (props) => {

  return(
    <h1>{props.course}</h1>
  )
}

const Content = (parts) => {
  
  return(
    <>
    <Part parts={parts[0]} />
    <Part parts={parts[1]} />
    <Part parts={parts[2]} />
    </>
  )
}

const Part = (parts) => {
  return (
    <p>
        {parts.name} {parts.exercises}
    </p>  
  )
}

const Total = (exercises) => {
  return (
    <>
    <p>Number of excercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </>
  )
}

export default App