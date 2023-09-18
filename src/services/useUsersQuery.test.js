import { renderHook, waitFor } from '@testing-library/react';
import { useUsersQuery } from './useUsersQuery';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test('test users query', async () => {
  const { result } = renderHook(() => useUsersQuery(), { wrapper });
  await waitFor(() => expect(result.current.status).toBe('success'));
});
