import React, { createContext, useState } from "react";
import Swal from "sweetalert2";


export const watchedContext = createContext();
const WatchedContextProvider = ({ children }) => {

  // Component States
  const savedItems = localStorage.getItem("movies");
  const initialValue = savedItems ? JSON.parse(savedItems) : [];
  const [watchedMovies, setWatchedMovies] = useState(initialValue);


  // Save To Localstorage Function
  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem('movies', JSON.stringify(newData));
  }


  // Function to add a movie to the watched list
const addToWatched = (movie) => {
  const isMovieWatched = watchedMovies.some((item) => item.id === movie.id);
  
  if (isMovieWatched) {
    Swal.fire({
      title: "Movie already added!",
      text: "This movie is already in your watched list.",
      icon: "info",
      confirmButtonText: "OK",
    });
  } else {
    setWatchedMovies((prevMovies) => {
      const updatedData = [...prevMovies, movie];
      saveDataToLocalStorage(updatedData);
      return updatedData;
    });
    Swal.fire({
      title: "Movie Added To Watched",
      icon: "success",
      draggable: true
    });
  }
};


  // Function To Remove Movie From Watched
  const removeWatchedMovie = (id) => {
    Swal.fire({
      title: "Are you sure You Want To Remove The Movie?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const NewMovies = watchedMovies.filter((item)=> item.id !== id);
        setWatchedMovies(NewMovies);
        saveDataToLocalStorage(NewMovies);
        Swal.fire({
          title: "Deleted!",
          text: "Your Movie has been removed.",
          icon: "success"
        });
      }
    });
  }


  return (
    <watchedContext.Provider value={{ watchedMovies, addToWatched, removeWatchedMovie }}>
      {children}
    </watchedContext.Provider>
  );
};


export default WatchedContextProvider;