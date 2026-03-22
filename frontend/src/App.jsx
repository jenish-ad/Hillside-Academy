import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar            from "./components/common/Navbar";
import Footer            from "./components/common/Footer";
import QuoteBar          from "./components/common/QuoteBar";
import AnnouncementPopup from "./components/common/AnnouncementPopup";
import Home              from "./pages/Home";
import About             from "./pages/About";
import Academics         from "./pages/Academics";
import Notice            from "./pages/Notice";
import Admissions        from "./pages/Admissions";
import Gallery           from "./pages/Gallery";
import Contact           from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center
                    justify-center text-center px-6">
      <div className="text-8xl font-extrabold text-yellow-400">404</div>
      <h1 className="mt-4 text-2xl font-extrabold text-blue-900">
        Page Not Found
      </h1>
      <p className="mt-2 text-gray-500 text-sm">
        The page you are looking for does not exist.
      </p>
      <a href="/"
         className="mt-6 bg-blue-900 text-white font-bold px-8 py-3
                    rounded-xl hover:bg-blue-800 transition">
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen select-none">
        <Navbar />
        <QuoteBar />
        <AnnouncementPopup />
        <div className="flex-grow">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/academics"  element={<Academics />} />
            <Route path="/notice"     element={<Notice />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery"    element={<Gallery />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}