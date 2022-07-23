import { useState } from 'react'
import { useDrinksContext } from '../hooks/useDrinksContext'

const DrinkForm = () => {
  const { dispatch } = useDrinksContext()

  const [title, setTitle] = useState('')
  const [alcoholic, setAlcoholic] = useState('')
  const [frequency, setFrequency] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const Drink = {title, alcoholic, frequency}
    
    const response = await fetch('/api/Drinks', {
      method: 'POST',
      body: JSON.stringify(Drink),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setAlcoholic('')
      setFrequency('')
      dispatch({type: 'CREATE_DRINK', payalcoholic: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Drink</h3>

      <label>Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Alcoholic:</label>
      <input 
        type="boolean" 
        onChange={(e) => setAlcoholic(e.target.value)} 
        value={alcoholic}
        className={emptyFields.includes('alcoholic') ? 'error' : ''}
      />

      <label>Frequency (gulps, shots, glasses etc):</label>
      <input 
        type="string" 
        onChange={(e) => setFrequency(e.target.value)} 
        value={frequency}
        className={emptyFields.includes('frequency') ? 'error' : ''}
      />

      <button>Add Drink</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default DrinkForm