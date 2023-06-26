import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GallaryPage from "./pages/GallaryPage";
import AnimalsPage from "./pages/AnimalsPage";
import TicketsPage from "./pages/TicketsPage";
import AddAnimalsPage from "./pages/AddAnimalsPage";
import AddImagesPage from "./pages/AddImagesPage";
import ViewTicketsPage from "./pages/ViewTicketsPage";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/Footer";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";
import EventsPage from "./pages/EventsPage";
import DonationsPage from "./pages/DonationsPage";
import AddEventsPage from "./pages/AddEventsPage";
import ViewDonations from "./pages/ViewDonations";
import ViewEventsPage from "./pages/ViewEventsPage";
import ManageAnimals from "./pages/ManageAnimals";
import ManageGallary from "./pages/ManageGallary";

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

            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/addAnimals" element={<AddAnimalsPage />} />
            <Route path="/addImages" element={<AddImagesPage />} />
            <Route path="/addEvents" element={<AddEventsPage />} />
            <Route path="/viewTickets" element={<ViewTicketsPage />} />
            <Route path="/animalDetails/:id" element={<AnimalDetailsPage />} />
            <Route path="/donations" element={<ViewDonations />} />
            <Route path="/viewEvents" element={<ViewEventsPage />} />
            <Route path="/manageAnimals" element={<ManageAnimals />} />
            <Route path="/manageGallary" element={<ManageGallary />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
