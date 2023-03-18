import axios from 'axios';
import { RepositoriesReponse } from '../models';
import { MAX_REPOS_PER_PAGE } from '../constants';

export const getRepositories = async (
  query: string,
  page: number
): Promise<RepositoriesReponse> => {
  const response = await axios<RepositoriesReponse>({
    url: `https://api.github.com/search/repositories?q=${query}&per_page=${MAX_REPOS_PER_PAGE}&page=${page}`,
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  return response.data;
};
