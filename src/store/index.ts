import { configureStore } from '@reduxjs/toolkit'

import produtoReducer from './reducers/produto'

const store = configureStore({
  reducer: {
    produto: produtoReducer
  }
})
