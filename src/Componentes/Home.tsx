import { useState, useEffect } from "react";
import instance from "../m/Movixios"; // Importa tu instancia de Axios
import { IResponseGetMovies } from "./interface";

export const Home = () => {
  const [list, setList] = useState<IResponseGetMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getMovies = async () => {
    try {
      const response = await instance.get("/discover/movie", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
        },
      });
      setList(response.data); // Actualiza el estado con los datos de la API
    } catch (err) {
      console.error("Error al obtener las películas:", err);
      alert("Hubo un problema al cargar las películas. Intenta nuevamente.");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Lista de Películas</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {list.results.map((movie, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h3>{movie.title}</h3>
           
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}

             
              style={{ width: "200px", borderRadius: "10px" }}
            />

            <div>
            {movie.video}
            </div>
          </li>
          


        ))}
      </ul>
    </div>
  );
};

export default Home;