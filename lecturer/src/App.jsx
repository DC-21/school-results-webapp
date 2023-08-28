import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Landing from "./pages/Landing"
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Landing/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App