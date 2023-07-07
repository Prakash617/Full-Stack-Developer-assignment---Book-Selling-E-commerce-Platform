import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const orderSlice = createSlice({
  name: 'orderSlice',

  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log('dispatch hit')
      // console.log('state',state)
      // console.log('action',action.payload)
      // state.push(action.payload);
      const newItem = action.payload;
      console.log('newItem',newItem)
      const index = state.findIndex((item) => item.id === newItem.id);
      // console.log('index',index)
      if (index !== -1) {
        state.splice(index, 1, newItem);
      } 
      else {
        state.push(newItem);
      }
      // console.log('initial',[...state])

    },
    removeItem: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrementByAmount } = orderSlice.actions

export default orderSlice.reducer