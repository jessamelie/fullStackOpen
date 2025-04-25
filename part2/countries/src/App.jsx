import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('data:', response.data)
        setCountries(response.data)
      })
      .catch(error => {
        console.error('error:', error)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>

      <div>
        {search && filteredCountries.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
          filteredCountries.map((country, index) => (
            <div key={index}>
              <p>{country.name.common}</p>
            </div>
          ))
        )}

        {filteredCountries.length === 1 && (
          <div>
            <h2>{filteredCountries[0].name.common}</h2>
            <p>Capital {filteredCountries[0].capital}</p>
            <p>Area {filteredCountries[0].area}</p>

            <h3>Languages</h3>
            <ul>
              {Object.values(filteredCountries[0].languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>

            <img
              src={filteredCountries[0].flags.png}
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default App
