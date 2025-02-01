import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://aryafuture.ir/movies")
			.then((result) => {
				console.log(result.data);
				setMovies(result.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	const handleEdit = (updatedMovie) => {
		const updatedMovies = movies.map((movie) =>
			movie.id === updatedMovie.id ? updatedMovie : movie
		);
		setMovies(updatedMovies);
	};

	const handleDelete = (id) => {
		const updatedMovies = movies.filter((movie) => movie.id !== id);
		setMovies(updatedMovies);
	};

	const handleAdd = (newMovie) => {
		setMovies((movies) => [...movies, newMovie]);
		console.log("movie added");
	};

	return (
		<MoviesContext.Provider
			value={{ movies, loading, handleDelete, handleEdit, handleAdd }}
		>
			{children}
		</MoviesContext.Provider>
	);
};
