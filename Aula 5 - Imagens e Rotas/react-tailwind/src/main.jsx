import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/AppRoutes'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
//  provedor de rotas tem a variavel router que recebe  o appRoutes onde esta configirado as rotas