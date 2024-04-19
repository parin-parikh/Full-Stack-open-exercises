const RenderOutput = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.length > 0 && persons.map((person) => {
        return (
          <div key={person.id}>
            {person.name} : {person.number} <button onClick={() => handleDelete(person.name, person.id)}>Delete</button>
          </div>
        )
      })}

      {/* {newFilterValue === '' ? persons.map(person => <div key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></div>) : filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)} */}
    </div>
  )
}

export default RenderOutput