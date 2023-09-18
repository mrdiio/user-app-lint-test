import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from '.';

test('home js', () => {
  render(<Home />, { wrapper: BrowserRouter });

  const linkElement = screen.getByText(/go to users page/i);
  expect(linkElement).toBeInTheDocument();
});
