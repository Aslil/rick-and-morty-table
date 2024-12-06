import React from "react";
import { TextField, MenuItem } from "@mui/material";

const Filters = ({ filters, setFilters }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* İsimle filtreleme */}
      <TextField
        label="İsim ile filtrele"
        variant="outlined"
        value={filters.name}
        onChange={(e) =>
          setFilters({ ...filters, name: e.target.value })
        }
        style={{ marginRight: "10px" }}
      />

      {/* Status ile filtreleme */}
      <TextField
        label="Status"
        select
        variant="outlined"
        value={filters.status}
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
        style={{ marginRight: "10px" }}
      >
        <MenuItem value="">Tümü</MenuItem>
        <MenuItem value="Alive">Alive</MenuItem>
        <MenuItem value="Dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </TextField>

      {/* Tür (Species) ile filtreleme */}
      <TextField
        label="Species"
        select
        variant="outlined"
        value={filters.species}
        onChange={(e) =>
          setFilters({ ...filters, species: e.target.value })
        }
      >
        <MenuItem value="">Tümü</MenuItem>
        <MenuItem value="Human">Human</MenuItem>
        <MenuItem value="Alien">Alien</MenuItem>
        <MenuItem value="Animal">Animal</MenuItem>
      </TextField>
    </div>
  );
};

export default Filters;
