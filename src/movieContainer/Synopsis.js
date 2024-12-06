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
    <div style={{border: '1px solid #000000'}}>
      <div>{synopsis.Tile}</div>
      <div>{synopsis.Year}</div>
      <div>{synopsis.Rating}</div>
      <div>{synopsis.Actors}</div>
      <div>{synopsis.Plot}</div>
      <div><img src={synopsis.Poster} alt="Movie Poster"/></div>
    </div>
  );
};

export default Synopsis;
