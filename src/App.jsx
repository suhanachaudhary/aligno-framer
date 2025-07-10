
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Main/> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
