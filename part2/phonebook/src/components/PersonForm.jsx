const PersonForm = ({ newName, handleContactChange, newNumber, handlePhoneChange, updateContact }) => {
  return (
    <div>
      <form>
        <div>
          name: <input value={newName} onChange={handleContactChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit" onClick={(e) => updateContact(e)}>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm