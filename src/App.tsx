import React, { useEffect, useState } from 'react';
import 'normalize.css';
import './App.css';
import { SearchForm } from './components/common/SearchForm';
import useRepositories from './hooks/useRepositories';
import useThrottle from './hooks/useThrottle';
import { RepositoriesTable } from './components/repositories/RepositoriesTable';
import { Pagination } from './components/common/Pagination';
import { Loader } from './components/common/Loader';
import { MAX_REPOS_PER_PAGE } from './constants';

function App() {
  const [query, setQuery] = useState('');
  const throttledQuery = useThrottle(query);
  const [page, setPage] = useState(1);
  const throttledPage = useThrottle(page);
  const { data, isFetching, isError } = useRepositories(
    throttledQuery,
    throttledPage
  );

  useEffect(() => {
    // reset the page number if query is changed
    setPage(1);
  }, [query]);

  const handleSearch = (input: string) => {
    setQuery(input);
  };

  return (
    <div className="App">
      <SearchForm
        inputPlaceholder="e.g. React, Vue, Python, etc."
        onSearch={handleSearch}
      />

      {isError && (
        <h2 className="error-message">
          Sorry, something went wrong. Please try again later.
        </h2>
      )}

      {!isError && (
        <>
          <Loader isLoading={isFetching}>
            <div className="repositories-table">
              {data && <RepositoriesTable repositories={data} />}
            </div>
          </Loader>

          {data && (
            <Pagination
              currentPage={page}
              totalPages={Math.ceil(data.total_count / MAX_REPOS_PER_PAGE)}
              onPageChange={(newPage) => setPage(newPage)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
