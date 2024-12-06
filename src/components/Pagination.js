import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Önceki
      </button>
      <span>Sayfa: {page}</span>
      <button onClick={() => setPage(page + 1)}>Sonraki</button>
    </div>
  );
};

export default Pagination;
