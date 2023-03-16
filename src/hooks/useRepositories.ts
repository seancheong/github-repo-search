import { useQuery } from 'react-query';
import { QueryKeys } from '../models';
import { getRepositories } from '../services/repositoryService';

/**
 * Custom hook to search repositories from Github
 * based on search query and page number
 *
 * Enabled query setting has been disabled inside the hook,
 * refetch has to be called for fetching repositories
 *
 * @param query (string)
 * @param page (number)
 * @returns UseQueryResult<RepositoriesReponse>
 */
const useRepositories = (query: string, page: number) => {
  return useQuery(
    [QueryKeys.repositories, query, page],
    () => getRepositories(query, page),
    {
      enabled: false,
    }
  );
};

export default useRepositories;
