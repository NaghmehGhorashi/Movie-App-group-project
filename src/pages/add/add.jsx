import { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Wrapper from "../../components/container/container";
import style from "./add.module.css";
import styled from "./add.module.css";

import { MoviesContext } from "../../context/MoviesContext";

function Add() {
	const getDate = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		if(month < 10){
			const today = `${year}-0${month}-${day}`;
			console.log(today)
			return today;
		} else {
			const today = `${year}-${month}-${day}`
			console.log(today)
			return today;
		}
	};
	const { movies, handleAdd } = useContext(MoviesContext);

	const [movieData, setMovieData] = useState({
		original_title: "",
		overview: "",
		release_date: getDate(),
		vote_average: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMovieData({ ...movieData, [name]: value });
	};

	useEffect(() => {
		console.log(movies);
	}, [movies]);

	const addMovie = (event, movieData) => {
		event.preventDefault();

		if (
			!movieData.original_title ||
			!movieData.overview ||
			!movieData.release_date ||
			!movieData.vote_average
		) {
			alert("Please fill in all the required fields");
			return;
		}

		const newMovie = {
			id: movies.length + 101,
			original_title: movieData.original_title,
			overview: movieData.overview,
			release_date: movieData.release_date,
			vote_average: movieData.vote_average,
		};
		console.log(newMovie);
		handleAdd(newMovie);

		setMovieData({
			original_title: "",
			overview: "",
			release_date: getDate(),
			vote_average: 0,
		});
	};

	return (
		<div>
			<Wrapper>
<div className={style.add}>
<Navbar />
{/* write ur code here */}
<div className={styled.container}>
<div className={styled.wrapper}>
	<h2>Add New Movie</h2>
	<form action="" onSubmit={() => addMovie(event, movieData)}>
		<h3>Title</h3>
		<input
			type="text"
			name="original_title"
			value={movieData.original_title}
			onChange={handleChange}
			className={style.textInput}
		/>
		
		<h3>Release Date</h3>
		<input
			type="date"
			name="release_date"
			value={movieData.release_date}
			onChange={handleChange}
		/>
		<h3>Rating</h3>
		<input
			type="number"
			min={1}
			max={10}
			name="vote_average"
			value={movieData.vote_average}
			onChange={handleChange}
		/>
		<h3>Description</h3>
		<textarea

			type="text"
			name="overview"
			value={movieData.overview}
			onChange={handleChange}
			className={style.textInput}
			
		/>
		<br />
		<div className={style.submitContainer}>
		<button className={style.submitButton} type="submit" aria-label="Add" tabIndex={0}>
			Submit
		</button></div>
	</form>
</div>
</div>
</div>
			</Wrapper>
		</div>
	);
}

export default Add;

// When you want to create the submit button, use : <<aria-label="Add">> and <<tabIndex="0" >>
// Since we are using useContext, you should define the addhandle function inside the context.
// Then, you can call it from your component using the context.
// This approach helps centralize logic, makes the code cleaner, and avoids passing props unnecessarily.
//
