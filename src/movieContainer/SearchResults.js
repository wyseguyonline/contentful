import {useEffect, useState} from 'react';
import Synopsis from './Synopsis';
import { APISearchUrl } from './constants';

const SearchResults = ({searchStr}) => {
  const [openSynopsis, setOpenSynopsis] = useState('');
  const [resultSet, setResultSet] = useState({'Search': []});

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchStr) {
        return;
      }
      const response = await fetch(`${APISearchUrl}${searchStr}`);
      const searchResults = await response.json();
      setResultSet(searchResults);
    };

    fetchResults();
  }, [searchStr]);

  const renderSearchResult = (searchResult) => {
    return (
      <div>
        <button className="searchResult" onClick={() => setOpenSynopsis(searchResult.imdbID)}>{`${searchResult.Title} (${searchResult.Year})`}</button>
      </div>
    );
  };

  return (
    <>
      <div>
      {
        resultSet.Search.map((item) => renderSearchResult(item))
      }
      </div>
      {openSynopsis ? <Synopsis filmId={openSynopsis} /> : null}
    </>
  );
};

export default SearchResults;
