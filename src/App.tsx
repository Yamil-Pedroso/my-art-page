import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home  from "./pages/HomePage"
import About from "./pages/AboutPage"
import Contact from "./pages/ContactPage"
import MessageSentPage from "./pages/MessageSentPage"
import PictureDetails from "./pages/PictureDetailsPage"

function App() {
  return (
    <>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message-sent/:name/:email/:message" element={<MessageSentPage />} />
          <Route path="/picture-details/:id/:picture" element={<PictureDetails />} />
        </Routes>
       </Router>
    </>
  )
}

export default App
