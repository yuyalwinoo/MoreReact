import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import RecipePage from './pages/Recipe';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/recipes/:id',
        element: <RecipePage />
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
