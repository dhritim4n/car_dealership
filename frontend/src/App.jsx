import { BrowserRouter, RouterProvider, Routes } from "react-router-dom"
import ContextProvider from "./context/ContextProvider"
import { router } from "./routes/router"


function App() {


  return (
    <>
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>
    </>
  )
}

export default App
