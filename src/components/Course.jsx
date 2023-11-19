const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((item) => (
        <Part part={item} key={item.id} />
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const arr = [];
  for (let i = 0; i < course.parts.length; i++) {
    arr.push(course.parts[i].exercises);
  }

  const init = 0;
  const total = arr.reduce((acc, curr) => acc + curr, init);

  return <p>Total of {total} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course}></Header>
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
