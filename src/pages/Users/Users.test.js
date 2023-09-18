import { QueryClient, QueryClientProvider } from 'react-query';
import { useUsersQuery } from '../../services/useUsersQuery';
import { BrowserRouter } from 'react-router-dom';
import Users from '.';
import { render, screen } from '@testing-library/react';

const mockUseUsersQuery = useUsersQuery;
jest.mock('../../services/useUsersQuery');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

describe('users page', () => {
  it('display loading view', () => {
    mockUseUsersQuery.mockImplementation(() => ({
      status: 'loading',
    }));

    render(<Users />, { wrapper });
    expect(screen.getByTestId('users-loading')).toBeInTheDocument();
  });

  it('display error view', () => {
    mockUseUsersQuery.mockImplementation(() => ({
      status: 'error',
    }));

    render(<Users />, { wrapper });
    expect(screen.getByTestId('users-error')).toBeInTheDocument();
  });

  it('display success view', () => {
    mockUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: [
        {
          id: 1,
          name: 'John Doe',
        },
        {
          id: 2,
          name: 'Jane Doe',
        },
      ],
    }));

    render(<Users />, { wrapper });
    expect(screen.getByTestId('user-0')).toBeInTheDocument();
  });

  it('display empty view', () => {
    mockUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: [],
    }));

    render(<Users />, { wrapper });
    expect(screen.getByTestId('users-null')).toBeInTheDocument();
  });
});
