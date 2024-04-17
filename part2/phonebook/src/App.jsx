import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import RenderOutput from './components/RenderOutput'
import phonebookServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [newFilterValue, setNewFilterValue] = useState('')

  useEffect(() => {
    phonebookServices.getAll().then(contacts => setPersons(contacts))
  }, [])

  const updateContact = (event) => {
    event.preventDefault()

    if(persons.some(persons => persons.name === newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    phonebookServices.create(newPerson).then(createdPerson => {
      setPersons([ ...persons, createdPerson])
    })
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (personName, personId) => {
    if(window.confirm(`Delete ${personName} ?`)) {
      const personObj = persons.find((person) => person.name === personName)

      phonebookServices.deletePerson(personId, personObj).then(deleted => {
        setPersons(deleted)
        setPersons(persons.filter(n => n.id !== personId))
      })
    }
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} persons={persons} />

      <h3>add a new</h3>
      <PersonForm newName={newName} handleContactChange={handleContactChange} newNumber={newNumber} handlePhoneChange={handlePhoneChange} updateContact={updateContact} />

      <h3>Numbers</h3>
      <RenderOutput newFilterValue={newFilterValue} persons={persons} filteredPersons={filteredPersons} handleDelete={handleDelete} /> 
    </div>
  )
}

export default App