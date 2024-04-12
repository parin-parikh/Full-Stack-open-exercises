import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import RenderOutput from './components/RenderOutput'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterValue, setNewFilterValue] = useState('')  

  const updateContact = (event) => {
    event.preventDefault()

    if(persons.some(persons => persons.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson)) 
    setNewName('')    
    setNewNumber('')
  }

  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(newFilterValue.toLowerCase()) || person.number.includes(newFilterValue)
  )

  const handleFilter = (event) => {
    setNewFilterValue(event.target.value)
  }

  return (
    <div key={persons.map(x => x.name)}>
      <h2>Phonebook</h2>

      <Filter value={newFilterValue} onChange={handleFilter} />

      <PersonForm newName={newName} handleContactChange={handleContactChange} newNumber={newNumber} handlePhoneChange={handlePhoneChange} updateContact={updateContact} />

      <RenderOutput newFilterValue={newFilterValue} persons={persons} filteredPersons={filteredPersons} /> 
    </div>
  )
}

export default App