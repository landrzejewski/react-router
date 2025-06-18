import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="products/:productId" element={<ProductDetail/>}/>
        </Route>
    </Routes>
  )
}

export default App
