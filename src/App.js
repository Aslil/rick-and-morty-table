import React, { useState, useEffect } from "react";
import { fetchCharacters } from "./api";
import Table from "./components/Table";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Details from "./components/Details";
import "./App.css"; // CSS'i buraya ekliyoruz

const App = () => {
  const [data, setData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filters, setFilters] = useState({ name: "", status: "", species: "" });
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchCharacters(page);
        setData(response.results);
        setError(null); // Hata varsa sıfırla
      } catch (err) {
        setError("Veri yüklenirken bir hata oluştu.");
      }
    };
    loadData();
  }, [page]);

  const applyFilters = () => {
    return data.filter((character) => {
      return (
        character.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.status === "" || character.status === filters.status) &&
        (filters.species === "" || character.species === filters.species)
      );
    });
  };

  return (
    <div>
      <h1>Rick and Morty Karakter Tablosu</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {error && <div className="error">{error}</div>}
      <Table
        data={applyFilters()}
        onRowClick={(character) => setSelectedCharacter(character)}
      />
      <Pagination page={page} setPage={setPage} />
      {selectedCharacter && <Details character={selectedCharacter} />}
    </div>
  );
};

export default App;
