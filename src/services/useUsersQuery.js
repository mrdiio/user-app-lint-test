import { useQuery } from 'react-query';

export const useUsersQuery = () => {
  const result = useQuery(['users'], () =>
    fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      res.json()
    )
  );
  return result;
};
