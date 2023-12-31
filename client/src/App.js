import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GallaryPage from "./pages/GallaryPage";
import AnimalsPage from "./pages/AnimalsPage";
import TicketsPage from "./pages/TicketsPage";
import Footer from "./components/Footer";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";
import EventsPage from "./pages/EventsPage";
import DonationsPage from "./pages/DonationsPage";

const App = () => {
  return (
    <HashRouter>
      <div className="">
        <Navbar />
        <div className="mb-12 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallary" element={<GallaryPage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/donate" element={<DonationsPage />} />
            <Route path="/animalDetails/:id" element={<AnimalDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
