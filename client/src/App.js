import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GallaryPage from "./pages/GallaryPage";
import AnimalsPage from "./pages/AnimalsPage";
import TicketsPage from "./pages/TicketsPage";
import LoginPage from "./pages/LoginPage";
import AddAnimalsPage from "./pages/AddAnimalsPage";
import AddImagesPage from "./pages/AddImagesPage";
import ViewTicketsPage from "./pages/ViewTicketsPage";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <div className="mb-12 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallary" element={<GallaryPage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/addAnimals" element={<AddAnimalsPage />} />
            <Route path="/addImages" element={<AddImagesPage />} />
            <Route path="/viewTickets" element={<ViewTicketsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
