import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Here some Samples/i);
  expect(welcomeText).toBeInTheDocument();
});
