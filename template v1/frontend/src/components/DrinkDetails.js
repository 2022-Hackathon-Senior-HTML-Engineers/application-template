import { useDrinksContext } from '../hooks/useDrinksContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DrinkDetails = ({ drink }) => {
  const { dispatch } = useDrinksContext()

  const handleClick = async () => {
    const response = await fetch('/api/drinks/' + drink._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_DRINK', payload: json})
    }
  }

  return (
    <div className="drink-details">
      <h4>{drink.title}</h4>
      <p><strong>Alcoholic: </strong>{drink.alcoholic}</p>
      <p><strong>Frequency: </strong>{drink.frequency}</p>
      <p>{formatDistanceToNow(new Date(drink.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default DrinkDetails