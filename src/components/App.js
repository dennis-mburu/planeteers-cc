import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((res) => res.json())
      .then((data) => setPlaneteers(data));
  }, []);

  const planeteersToDisplay = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }
  return (
    <div>
      <Header />
      <SearchBar onSearchChange={handleSearchChange} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteersToDisplay} />
    </div>
  );
}

export default App;
