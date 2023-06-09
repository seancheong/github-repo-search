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
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const throttledQuery = useThrottle(query);
  const [page, setPage] = useState(1);
  const throttledPage = useThrottle(page, 1000);
  const { data, isFetching, isError } = useRepositories(
    throttledQuery,
    throttledPage
  );

  useEffect(() => {
    if (isError) {
      // reset the input string if there's an error
      setInput('');
    }
  }, [isError]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = (input: string) => {
    setQuery(input);
    setPage(1);
  };

  return (
    <div className="App">
      <SearchForm
        input={input}
        inputPlaceholder="e.g. React, Vue, Python, etc."
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />

      {isError && (
        <h2 className="error-message">
          Sorry, something went wrong. Please try again later.
        </h2>
      )}

      {!isError && (
        <div className="data-container">
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
        </div>
      )}
    </div>
  );
}

export default App;
