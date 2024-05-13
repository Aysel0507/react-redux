import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CustomerAPi } from './TableApi'


const store = configureStore({
    reducer: {
      [CustomerAPi.reducerPath]: CustomerAPi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(CustomerAPi.middleware),
  })
  
setupListeners(store.dispatch)

export default store;