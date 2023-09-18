import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from '.';

test('home js', async () => {
  render(<Home />, { wrapper: BrowserRouter });

  const linkElement = screen.getByText(/go to users page/i);
  expect(linkElement).toBeInTheDocument();

  const goToUser = screen.getByText(/go to users page/i);

  waitFor(() => {
    fireEvent.click(goToUser);

    expect(screen.getByText(/back to home/i)).toBeInTheDocument();
  });
});
