import React, {useState} from 'react';
import axios from "axios";
import ResultCard from "./ResultCard";


const AddFilm = () => {
   const[inputText, setInputText] = useState('')
   const[result, setResult] = useState([])


    const API_KEY ='1f75000b86f4caf1e8b7fe256423c391'
    const onInputChange = (event) =>{
       event.preventDefault()
       let newText = event.target.value
        setInputText(newText)
        const fetchMovie = async () => {
            const response = await axios.get(
                `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${newText}`
            )
           if(!response.data.errors){
               console.log(response.data.results)
               setResult(response.data.results)
           } else{
               setResult([])
           }
        }
        fetchMovie()
    };

    return (
        <div className="add-page">
                <div className="input-section">
                    <div className="container">
                    <div className="input-section-title">
                       <h2 className="input-title">Welcome.</h2>
                        <h3 className="input-title-descr">Millions of movie to discover. Explore now.</h3>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" value={inputText} onChange={onInputChange}/>
                        <button  className="search-film-btn">
                            search
                        </button>
                    </div>
                        </div>
                </div>
            <div className="container">
                {result.length ? (
                    <div className="results-inner">
                        <ul className="results">
                            {result.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : ""}
                <div className="add-content">
                </div>
            </div>
        </div>
    );
};

export default AddFilm;
