
import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/home/home';
import Movies from './pages/all movie/movies';
import Movie from './pages/movie/movie';
import Add from './pages/add/add';
import Aboutus from './pages/about us/aboutus';

function App() {
  return (
    <MoviesProvider> {/* Wrap the routes with the MoviesProvider */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add" element={<Add />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </MoviesProvider>
  );
}

export default App;

