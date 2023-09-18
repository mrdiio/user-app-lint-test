import { render } from '@testing-library/react';
import App from './App';

test('render app', () => {
  render(<App />);

  const linkElement = document.querySelector('a');
  expect(linkElement).toBeInTheDocument();
});
