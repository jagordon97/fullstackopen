const App = () => {
  const course ='Half stack application development'
  const part1 = 'Fundementals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'state of a component'
  const excercises3 = 14
  
  return (
    <>
      <Header  course={course} />
      <Content part1={part1} part2={part2} part3={part3} excercises1={excercises1} excercises2={excercises2} excercises3={excercises3}/>
      <Total excercises1={excercises1} excercises2={excercises2} excercises3={excercises3}/>
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
    <Part part={props.part1} excercises={props.excercises1} />
    <Part part={props.part2} excercises={props.excercises2}  />
    <Part part={props.part3} excercises={props.excercises3}  />
    </>
   
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part} {props.excercises}
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