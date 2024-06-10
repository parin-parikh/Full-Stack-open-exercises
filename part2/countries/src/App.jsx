import { useEffect,useState } from 'react'
import axios from 'axios'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [country, setCountry] = useState([])
  const [error, setError ] = useState('')

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);

  const handleSearch = (input) => {
    fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status === 404) {
          setError('No country found. Please try again.');
        } else if (data.length > 10) {
          setError('Too many countries found. Please make your query more specific.');
        } else {
          setCountry(data);
          setError('');
        }
      })
  }

  return (
    <>
      <div>
        find countries <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      </div>

      <pre>
        {JSON.stringify(country, null, 2)}
      </pre>
    </>
  )
}

export default App
