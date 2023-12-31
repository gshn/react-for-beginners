import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import Detail from "./routes/Detail"
import Home from "./routes/Home"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  )
}

export default App
