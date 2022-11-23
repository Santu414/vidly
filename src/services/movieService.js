import http from "./httpService";
const endPoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(endPoint);
}

export function deleteMovie(movieId) {
  return http.delete(endPoint + "/" + movieId);
}
