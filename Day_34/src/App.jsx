import { Route, BrowserRouter as Router, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import News from "./pages/News";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
