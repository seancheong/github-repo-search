import axios from 'axios';
import { RepositoriesReponse } from '../models';

export const getRepositories = async (
  query: string,
  page: number
): Promise<RepositoriesReponse> => {
  const MAX_REPOS_PER_PAGE = 5;

  const response = await axios<RepositoriesReponse>({
    url: `https://api.github.com/search/repositories?q=${query}&per_page=${MAX_REPOS_PER_PAGE}&page=${page}`,
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  return response.data;
};
