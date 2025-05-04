const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(person => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}{""}
            <button onClick={() => deletePerson (person.id, person.name)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Persons;
