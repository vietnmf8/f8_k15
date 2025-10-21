import { Route, BrowserRouter as Router, Routes } from "react-router";
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import News from "./pages/News"

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
