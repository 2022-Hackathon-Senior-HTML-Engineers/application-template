import { createContext, useReducer } from 'react'

export const DrinksContext = createContext()

export const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DRINKS':
      return { 
        drinks: action.payload 
      }
    case 'CREATE_DRINKS':
      return { 
        drinks: [action.payload, ...state.drinks] 
      }
    case 'DELETE_DRINKS':
      return { 
        drinks: state.drinks.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const DrinksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drinksReducer, { 
    drink: null
  })
  
  return (
    <DrinksContext.Provider value={{ ...state, dispatch }}>
      { children }
    </DrinksContext.Provider>
  )
}