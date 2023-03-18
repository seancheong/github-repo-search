import { useQuery } from 'react-query';
import { QueryKeys } from '../models';
import { getRepositories } from '../services/repositoryService';

/**
 * Custom hook to search repositories from Github
 * based on search query and page number
 *
 * Enabled query setting has been set to only enabled
 * when both query and page are not empty.
 * This is to prevent useQuery fetch data on mount
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
      enabled: !!query && !!page,
      keepPreviousData: true,
    }
  );
};

export default useRepositories;
