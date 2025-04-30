import { render, screen } from '@testing-library/react';
import { HelloWorld } from './index.jsx';

test('renders Hello World', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});