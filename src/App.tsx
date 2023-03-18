import React, { useState } from 'react';
import 'normalize.css';
import './App.css';
import { SearchForm } from './components/common/SearchForm';
import useRepositories from './hooks/useRepositories';
import useThrottle from './hooks/useThrottle';
import { RepositoriesTable } from './components/repositories/RepositoriesTable';
import { Pagination } from './components/common/Pagination';
import { MAX_REPOS_PER_PAGE } from './constants';

function App() {
  const [query, setQuery] = useState('');
  const throttledQuery = useThrottle(query);
  const [page, setPage] = useState(1);
  const throttledPage = useThrottle(page);
  const { data } = useRepositories(throttledQuery, throttledPage);

  const handleSearch = (input: string) => {
    setQuery(input);
  };

  const renderRepositories = () => {
    if (data) {
      return (
        <>
          <RepositoriesTable repositories={data} />
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(data.total_count / MAX_REPOS_PER_PAGE)}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </>
      );
    }
  };

  return (
    <div className="App">
      <SearchForm
        inputPlaceholder="e.g. React, Vue, Python, etc."
        onSearch={handleSearch}
      />

      {renderRepositories()}
    </div>
  );
}

export default App;
