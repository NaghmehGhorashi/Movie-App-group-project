import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Wrapper from '../../components/container/container';
import style from './Movie.module.css';
import { MoviesContext } from '../../context/MoviesContext';

function Movie() {
    const { id } = useParams();
    const { movies, handleEdit } = useContext(MoviesContext);
    const [article, setArticle] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedArticle, setEditedArticle] = useState(null);

    useEffect(() => {
        const foundArticle = movies.find((movie) => movie.id === parseInt(id));
        if (foundArticle) {
            setArticle(foundArticle);
            setEditedArticle(foundArticle);
        } else {
            console.error("cant find movie");
        }
    }, [id, movies]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveChanges = () => {
        handleEdit(editedArticle);
        setArticle(editedArticle);
        setIsEditing(false);
    };

    return (
        <Wrapper>
            <div>
                <Navbar />
                <div className="container">
                    <div className={style.article}>
                        {article ? (
                            <>
                                <div>
                                    <img src={article.poster_path} alt="poster_path" />
                                </div>
                                {!isEditing ? (
                                    <div className={style.description}>
                                        <div>
                                            <p>{article.original_title}</p>
                                        </div>
                                        <div>
                                            <p>Release Date : {article.release_date}</p>
                                        </div>
                                        <div>
                                            <p>Rate : {article.vote_average}</p>
                                        </div>
                                        <div>
                                            <p>Overview : {article.overview}</p>
                                        </div>
                                        <button onClick={() => setIsEditing(true)}>Edit</button>
                                    </div>
                                ) : (
                                    <div className={style.description}>
                                        <div>
                                            <label>Title :</label>
                                            <input
                                                type="text"
                                                name="original_title"
                                                value={editedArticle.original_title}
                                                onChange={handleInputChange}
                                                className={style.input}
                                            />
                                        </div>
                                        <div>
                                            <label>Description</label>
                                            <textarea
                                                name="overview"
                                                value={editedArticle.overview}
                                                onChange={handleInputChange}
                                                className={style.textarea}
                                            ></textarea>
                                        </div>
                                        <button onClick={saveChanges} className={style.button}>
                                            Save
                                        </button>
                                        <button onClick={() => setIsEditing(false)} className={style.button}>
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={style.placeholder}>Loading...</div>
                        )}
                        {article && (
                            <div className={style.casts}>
                                {article.casts.slice(0, 5).map((cast) => (
                                    <div key={cast.id} className={style.cast}>
                                        <img src={cast.profile_path} alt={cast.name} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Movie;


















// in doroste
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../../components/navbar/navbar';
// import Wrapper from '../../components/container/container';
// import style from './Movie.module.css';

// function Movie() {
//     const [article, setArticle] = useState({});
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedArticle, setEditedArticle] = useState({});
//     const params = useParams();

//     useEffect(() => {
//         axios
//             .get(`https://aryafuture.ir/movies/${params.id}`)
//             .then((result) => {
//                 setArticle(result.data);
//                 setEditedArticle(result.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [params.id]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditedArticle((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const saveChanges = () => {
//         setArticle(editedArticle);
//         setIsEditing(false);
//         console.log('Updated Article:', editedArticle);

//     };

//     return (
//         <Wrapper>
//             <div>
//                 <Navbar />
//                 <div className={style.container}>
//                     <div className={style.article}>
//                         <div>
//                             <img src={article.poster_path} alt="poster_path" />
//                         </div>


//                         {!isEditing ? (
//                             <div className={style.description}>
//                                 <div>
//                                     <p>{article.original_title}</p>
//                                 </div>
//                                 <div>
//                                     <p>Release Date : {article.release_date}</p>
//                                 </div>
//                                 <div>
//                                     <p>Rate : {article.vote_average}</p>
//                                 </div>
//                                 <div>
//                                     <p>Overview : {article.overview}</p>
//                                 </div>

//                                 <button onClick={() => setIsEditing(true)}>Edit</button>
//                             </div>
//                         ) : (
//                             <div className={style.description}>
//                                 <div>
//                                     <label>Title:</label>
//                                     <input
//                                         type="text"
//                                         name="original_title"
//                                         value={editedArticle.original_title}
//                                         onChange={handleInputChange}
//                                         className={style.input}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Title:</label>
//                                     <input
//                                         type="text"
//                                         name="release_date"
//                                         value={editedArticle.release_date}
//                                         onChange={handleInputChange}
//                                         className={style.input}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Title:</label>
//                                     <input
//                                         type="text"
//                                         name="release_date"
//                                         value={editedArticle.vote_average}
//                                         onChange={handleInputChange}
//                                         className={style.input}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Description:</label>
//                                     <textarea
//                                         name="overview"
//                                         value={editedArticle.overview}
//                                         onChange={handleInputChange}
//                                         className={style.textarea}
//                                     ></textarea>
//                                 </div>

//                                 <button onClick={saveChanges} className={style.button}>
//                                     Save
//                                 </button>
//                                 <button onClick={() => setIsEditing(false)} className={style.button}>
//                                     Cancel
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                 </div>

//             </div>
//         </Wrapper>
//     );
// }

// export default Movie;

