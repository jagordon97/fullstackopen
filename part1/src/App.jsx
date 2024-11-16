const App = () => {
  const course ={
    name: 'Half stack application development',
    parts:
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
  }
  return (
    <>
      <Header  course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

const Header = ({course}) => {

  return(
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return(
    <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>
        {part.name} {part.exercises}
    </p>  
  )
}

const Total = ({parts}) => {
  return (
    <>
    <p>Number of excercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

export default App