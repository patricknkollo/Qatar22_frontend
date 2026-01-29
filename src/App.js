import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryList from "./components/CountrieList";
import Footer from "./components/Footer";
import JoueurSidebar from "./components/JoueurSidebar";
import PersonsList from "./components/PersonsList";
import RefereesList from "./components/RefereesList";
import ButeursList from "./components/ButeursList";
import MatchesList from "./components/MatchesList";
import ClubsList from "./components/ClubsList";
import Home from "./components/Home";
import PersonPage from "./components/PersonPage";
import PaysPage from "./components/PaysPage";
import CountriesFilter from "./components/CountriesFilter";

function App() {
  return (
    <div className="App">
      {/*   <Sidebar />
      <Navbar role="navbar" data-testid="nav" /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scorers" element={<ButeursList />} />
        <Route path="/pays" element={<CountryList />} />
        <Route path="/persons" element={<PersonsList />} />
        <Route path="/referees" element={<RefereesList />} />
        <Route path="/joueurs" element={<JoueurSidebar />} />
        <Route path="/buteurs" element={<ButeursList />} />
        <Route path="/match" element={<MatchesList />} />
        <Route path="/clubs" element={<ClubsList />} />
        <Route path="/person/:personid" exact element={<PersonPage />} />
        <Route path="/pays/:paysid" exact element={<PaysPage />} />
        <Route path="/pays/filtre" element={<CountriesFilter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
