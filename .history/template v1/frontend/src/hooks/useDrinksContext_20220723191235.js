import { DrinksContext } from "../context/DrinksContext"
import { useContext } from "react"

export const useDrinksContext = () => {
  const context = useContext(DrinksContext)

  if(!context) {
    throw Error('useDrinksContext must be used inside a DrinksContentProvider')
  }

  return context
}