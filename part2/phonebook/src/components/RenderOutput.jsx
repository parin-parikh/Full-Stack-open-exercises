const RenderOutput = ({ newFilterValue, persons, filteredPersons }) => {
    return (
      <div key={1}>
        <h2>Numbers</h2>
        {newFilterValue === '' ? persons.map(person => <div key={person.id}>{person.name} {person.number}</div>) : filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
      </div>
    )
}

export default RenderOutput