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

  useEffect(() => {
    phonebookServices.getAll().then(contacts => setPersons(contacts))
  }, [])

  const updateContact = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to the phonebook. Do you want to update the phone number?`);

      if(confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber }

        phonebookServices.update(existingPerson.id, updatedPerson).then(updated => {
          setPersons(persons.map(person => person.id === existingPerson.id ? updated : person))
        })
        .catch(error => {
          console.log(error)
        })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }

      phonebookServices.create(newPerson).then(createdPerson => {
        setPersons([ ...persons, createdPerson])
      })
    }
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

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch} persons={persons} />

      <h3>add a new</h3>
      <PersonForm newName={newName} handleContactChange={handleContactChange} newNumber={newNumber} handlePhoneChange={handlePhoneChange} updateContact={updateContact} />

      <h3>Numbers</h3>
      <RenderOutput persons={persons} handleDelete={handleDelete} /> 
    </div>
  )
}

export default App