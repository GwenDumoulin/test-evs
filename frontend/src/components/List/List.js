import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../../features/items/itemsSlice'
import Form from '../Form/Form'

function List() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.items)
  const status = useSelector((state) => state.items.status)

  // Fetch items only once, when the component loads
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems())
    }
  }, [status, dispatch])

  return (
    <div>
      {status === 'loading' ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.newItem}</li>
          ))}
          <li>
            <Form />
          </li>
        </ul>
      )}
    </div>
  )
}

export default List
