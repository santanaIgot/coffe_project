import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home/index.tsx'
import { Cart } from './Pages/Cart/index.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
