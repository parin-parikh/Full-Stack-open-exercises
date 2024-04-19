const Filter = ({ search, setSearch, persons }) => {
  return (
    <>
      filter shown with: {" "}
      <input type="search" onChange={(e) => setSearch(e.target.value)} value={search} />
      <ul>
        {search === "" ? null : persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
        .map((person) => {
          return (
            <li key={person.name}>
              {person.name} : {person.number}
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default Filter