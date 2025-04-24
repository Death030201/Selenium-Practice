import React, { useState, useEffect } from "react";

// Movie list as objects (back to your original style)
const movies = [
  { id: 1, title: "Interstellar", year: 2014 },
  { id: 2, title: "3 Idiots", year: 2009 },
  { id: 3, title: "Inception", year: 2010 },
  { id: 4, title: "URI", year: 2019 },
];

// Load favorites from localStorage
const getInitialFavorites = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

const App = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites());
  const [showFavorites, setShowFavorites] = useState(false);

  // Save to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const exists = favorites.some((m) => m.id === movie.id);
    const updated = exists
      ? favorites.filter((m) => m.id !== movie.id)
      : [...favorites, movie];
    setFavorites(updated);
  };

  const isFavorite = (movieId) => favorites.some((m) => m.id === movieId);

  const listToShow = showFavorites ? favorites : movies;

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "green",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          color: "white",
          zIndex: 1000,
        }}
      >
        <button onClick={() => setShowFavorites(false)}>All Movies</button>
        <button onClick={() => setShowFavorites(true)}>Favorites</button>
      </nav>

      <div style={{ textAlign: "center" }}>
        <h2>{showFavorites ? "Favourite Movies" : "All Movies"}</h2>

        {listToShow.length === 0 ? (
          <p>No movies to display.</p>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            {listToShow.map((movie) => (
              <div
                key={movie.id}
                style={{
                  border: "2px solid black",
                  width: "200px",
                  height: "300px",
                  padding: "1rem",
                  backgroundColor: "white",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>
                  {movie.title} ({movie.year})
                </h4>
                <button
                  onClick={() => toggleFavorite(movie)}
                  style={{
                    marginTop: "13rem",
                    width: "100%",
                    height: "40px",
                    backgroundColor: isFavorite(movie.id) ? "red" : "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {isFavorite(movie.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;