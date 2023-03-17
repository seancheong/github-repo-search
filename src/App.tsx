import React, { useState } from 'react';
import 'normalize.css';
import './App.css';
import { SearchForm } from './components/common/SearchForm';
import useRepositories from './hooks/useRepositories';
import useThrottle from './hooks/useThrottle';

function App() {
  const [query, setQuery] = useState('');
  const throttledQuery = useThrottle(query);
  const [page, setPage] = useState(1);
  const throttledPage = useThrottle(page);
  const { data } = useRepositories(throttledQuery, throttledPage);

  const handleSearch = (input: string) => {
    setQuery(input);
  };

  return (
    <div className="App">
      <SearchForm
        inputPlaceholder="e.g. React, Vue, Python, etc."
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
