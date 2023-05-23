
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WriteMessage from './views/WriteMessage.jsx'
import Flow from './views/Flow.jsx'
import Removed from './views/Removed.jsx'

const router = createBrowserRouter([
  {
    path: "/Write",
    element: <WriteMessage />
  },
  {
    path: "/",
    element: <Flow />
  },
  {
    path: "/Removed",
    element: <Removed />
  }
]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
