import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardOverview from "./pages/DashboardOverview.jsx";
import DashboardStats from "./pages/DashboardStats.jsx";
import DashboardSettings from "./pages/DashboardSettings.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="products/:productId" element={<ProductDetail/>}/>

            <Route path="dashboard" element={<Dashboard/>}>
                <Route index element={<DashboardOverview/>}/>
                <Route path="stats" element={<DashboardStats />} />
                <Route path="settings" element={<DashboardSettings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default App
