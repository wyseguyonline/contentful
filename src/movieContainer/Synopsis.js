import {useEffect, useState} from 'react';
import {APIidUrl} from './constants';

const Synopsis = ({filmId}) => {
  const [synopsis, setSynopsis] = useState({});
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`${APIidUrl}${filmId}`);
      const searchResults = await response.json();
      setSynopsis(searchResults);
    };

    fetchResults();
  }, [filmId]);

  return (
    <div style={{border: '1px solid #000000', margin: '10px', width: '40%'}}>
      <div>Title: {synopsis.Title} ({synopsis.Type})</div>
      <div>Released: {synopsis.Year}</div>
      <div>Rated: {synopsis.Rated}</div>
      <div>Notable Cast: {synopsis.Actors}</div>
      <div>
        <p>Plot Summary:</p>
        <p>{synopsis.Plot}</p>
      </div>
      <div><img src={synopsis.Poster} alt="Movie Poster"/></div>
    </div>
  );
};

export default Synopsis;
