import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Login from "./components/Login"

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App