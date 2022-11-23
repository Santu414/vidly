import http from "./httpService";
import config from "../config.json";

const endPoint = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(endPoint);
}
export function getMovie(movieId) {
  return http.get(endPoint + "/" + movieId);
}
export function saveMovie(movieId) {}

export function deleteMovie(movieId) {
  return http.delete(endPoint + "/" + movieId);
}
