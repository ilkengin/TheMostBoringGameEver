import { render, screen } from '@testing-library/react';
import React from 'react';
import Leaderboard from './Leaderboard';

test('renders learn react link', () => {
  render(<Leaderboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
