const Header = ({ name }) => <h2>{name}</h2>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>Total of exercises {total}</p>
    </>
  );
};

const Course = ({ courses }) => (
  <>
    {courses.map((course) => (
      <section key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </section>
    ))}
  </>
);

export default Course;
