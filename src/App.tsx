import { Routes,Route } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </div>
  )
}

export default App
