import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Thunk action to fetch items from backend
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch('http://localhost:3000/api/items')
  return response.json()
})

// Thunk action to add a new item to the backend
export const addItem = createAsyncThunk('items/addItem', async (newItem) => {
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newItem }),
  })
  return response.json()
})

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
  },
})

export default itemsSlice.reducer
