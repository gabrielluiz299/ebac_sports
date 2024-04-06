import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const produtoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload
      if (state.itens.find((p) => p.id === favoritos.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favoritos.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { adicionarAosFavoritos } = produtoSlice.actions
export default produtoSlice.reducer
