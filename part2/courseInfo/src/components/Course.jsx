const Course = (props) => {
  return (
    <div>
        {
          props.course.map(course => (
            <div key={course.id}>
              <h2>{course.name}</h2>
              <div>
                {course.parts.map(part => (
                  <p key={part.id}>
                    {part.name} {part.exercises}
                  </p>
                ))}            
              </div>
              <h4>total of {course.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h4>
            </div>
          ))
        }
    </div>
  )
}

export default Course