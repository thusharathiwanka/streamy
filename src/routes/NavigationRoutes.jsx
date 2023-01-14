import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../components";
import { Feed, Channel, Search, Video } from "../pages";

const NavigationRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Feed />} />
        <Route path="video/:id" element={<Video />} />
        <Route path="channel/:id" element={<Channel />} />
        <Route path="search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default NavigationRoutes;
