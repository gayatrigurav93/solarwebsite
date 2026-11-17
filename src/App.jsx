import Layout from "./Components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";  
function App() {
  return (
<>
<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Services" element={<Services />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  </Routes>
</>
  )
}

export default App;