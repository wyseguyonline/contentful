import {useRef} from 'react';

const SearchInput = ({searchStrHandler}) => {
  const searchStr = useRef('');

  const searchHandler = () => {
    searchStrHandler(searchStr.current);
  };

  return (
    <>
      <h1>Movie Search!</h1>
      <div>
        <input type="text" onChange={(e) => searchStr.current = e.target.value} />
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
};

export default SearchInput;
