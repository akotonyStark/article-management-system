
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import { ChakraProvider } from '@chakra-ui/react'
import Articles from './pages/Articles'
import CreateArticle from './pages/CreateArticle'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/new-article' element={<CreateArticle/>} />
    </Route> 
    )
  )

  return (
    <ChakraProvider >
      <RouterProvider router={router}/>
    </ChakraProvider>
      
  )
}

export default App
