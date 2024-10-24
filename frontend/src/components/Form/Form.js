import { useDispatch } from 'react-redux'
import { addItem } from '../../features/items/itemsSlice'

function Form() {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = e.target.elements.newItem.value.trim()

    if (newItem) {
      dispatch(addItem(newItem))
      e.target.reset()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="Entrez un nouvel élément"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default Form
