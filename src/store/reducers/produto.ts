import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = produtoSlice.actions
export default produtoSlice.reducer
