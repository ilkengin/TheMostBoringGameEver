import { render, screen } from '@testing-library/react';
import React from 'react';
import Playview from './Playview';

test('renders learn react link', () => {
  render(<Playview />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
