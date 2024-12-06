import {useState} from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const MovieContainer = () => {
  const [searchStr, setSearchStr] = useState('');
  const searchStrHandler = (search) => setSearchStr(search);

  return (
    <div>
      <SearchInput searchStrHandler={searchStrHandler} />
      <SearchResults searchStr={searchStr}/>
    </div>
  );
};

export default MovieContainer;
