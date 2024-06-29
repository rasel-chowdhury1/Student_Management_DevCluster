import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.js'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[#FFFCFB] w-full h-[740px]">
      <Provider store={store}>
        <div className="flex">
            <RouterProvider router={router}></RouterProvider>
        </div>
       </Provider>
    </div>
  </React.StrictMode>,
)
