import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

function App() {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <div>
        <Course course={course} />
      </div>
    </>
  );
}

export default App;
