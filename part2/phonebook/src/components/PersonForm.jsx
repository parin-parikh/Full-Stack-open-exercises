const PersonForm = ({ newName, handleContactChange, newNumber, handlePhoneChange, updateContact }) => {
    return (
      <div>
        <h2>add a new</h2>
        <form onSubmit={updateContact}>
          <div>
            name: <input value={newName} onChange={handleContactChange}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={handlePhoneChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
}

export default PersonForm