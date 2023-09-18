import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Users from '.';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

test('users page', async () => {
  render(<Users />, { wrapper });

  const linkElement2 = screen.getByText(/back to home/i);
  expect(linkElement2).toBeInTheDocument();

  waitFor(() => {
    fireEvent.click(linkElement2);

    const linkElement3 = screen.getByText(/go to users page/i);
    expect(linkElement3).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByTestId(/user-1/i)).toBeInTheDocument();
  });
});
