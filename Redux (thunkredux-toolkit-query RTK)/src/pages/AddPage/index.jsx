import React, { useState } from "react";
import { useGetAllDataQuery, usePostMovieMutation } from "../../services/MoviesApi";
import { useNavigate } from "react-router-dom";


const AddPage = () => {
  const { data: movies, refetch } = useGetAllDataQuery();
  const [postMovie] = usePostMovieMutation();
  const navigate=useNavigate()
  const [newMovie, setNewMovie] = useState({
    title: "",
    posterImg: "",
    releaseYear: "",
    genre: "",
  });

  return (
    <div>
      <h2>Add Movie</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await postMovie(newMovie);
          navigate("/")
          refetch();
          setNewMovie({ title: "", posterImg: "", releaseYear: "", genre: "" });
        }}
      >
        <input
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          type="text"
          placeholder="enter title"
        />

        <input
          value={newMovie.posterImg}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterImg: e.target.value })
          }
          type="url"
          placeholder="enter poster image"
        />

        <input
          value={newMovie.releaseYear}
          onChange={(e) =>
            setNewMovie({ ...newMovie, releaseYear: e.target.value })
          }
          type="number"
          placeholder="enter release year"
        />

        <input
          value={newMovie.genre}
          onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
          type="text"
          placeholder="enter genre"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPage;
