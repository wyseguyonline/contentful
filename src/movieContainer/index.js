import {useState} from 'react';
import {QueryParamProvider} from 'use-query-params';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const MovieContainer = () => {
  const [searchStr, setSearchStr] = useState('');
  const searchStrHandler = (search) => setSearchStr(search);

  return (
    <QueryParamProvider>
      <SearchInput searchStrHandler={searchStrHandler} />
      <SearchResults searchStr={searchStr}/>
    </QueryParamProvider>
  );
};

export default MovieContainer;
