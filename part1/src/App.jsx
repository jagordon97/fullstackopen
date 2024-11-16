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
      <Content part1={part1} part2={part2} part3={part3} />
      <Total excercises1={part1.excercises1} excercises2={part2.excercises2} excercises3={part3.excercises3}/>
    </>
  );
}

const Header = (props) => {

  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  
  return(
    <>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
    </>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part.name} {props.part.excercises}
    </p>  
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </>
  )
}

export default App