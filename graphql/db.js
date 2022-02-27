let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 5,
  },
  {
    id: 1,
    name: "Avengers",
    score: 4,
  },
  {
    id: 2,
    name: "Geumja",
    score: 2,
  },
  {
    id: 3,
    name: "Parasite",
    score: 7,
  },
];

export const getMovies = () => movies;
export const getById = (id) => {
  //   console.log("getById" + id + typeof id);
  const theMovie = people.filter((person) => id === person.id);
  //   console.log(theMovie[0]);
  return theMovie[0];
};

export const deleteMovie = (id) => {
  console.log(id);
  const filteredMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = { id: movies.length, name, score };
  movies.push(newMovie);
  return newMovie;
};
