import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import Books from "./pages/Book/Books";
import BookDetail from "./pages/Book/BookDetail";
import NotFound from "./pages/NotFound";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    // Using Theme Context with useContext Hook
    <ThemeContextProvider>
      {/*  Initialize react routing */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* Nested Routing */}
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Dynamic Routing */}
          <Route path="/books">
            <Route index element={<Books />} />
            <Route path=":title" element={<BookDetail />} />
          </Route>

          {/* Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
