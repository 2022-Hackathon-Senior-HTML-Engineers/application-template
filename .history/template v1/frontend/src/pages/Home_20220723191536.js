import { useEffect } from "react"
import { useDrinksContext } from "../hooks/useDrinksContext"

// components
// import DrinkDetails from "../components/DrinkDetails"
// import DrinkForm from "../components/DrinkForm"

const Home = () => {
  const { drinks, dispatch } = useDrinksContext()

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch('/api/drinks')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_DRINKS', payload: json})
      }
    }

    fetchDrinks()
  }, [dispatch])

  return (
    <div className="home">
      <div className="drinks">
        {drinks && drinks.map(drink => (
          <DrinkDetails drink={drink} key={drink._id} />
        ))}
      </div>
      {/* <DrinkForm /> */}
    </div>
  )
}

export default Home