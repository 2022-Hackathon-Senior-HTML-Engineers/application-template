import { WorkoutsContext } from "../context/DrinksContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  return context
}