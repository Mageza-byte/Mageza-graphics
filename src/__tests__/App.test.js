import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Mageza ICT Hub App', () => {
  test('renders navigation and animated title', () => {
    render(<App />);
    expect(screen.getByText(/MAGEZA ICT HUB/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
  });

  test('renders contact page when Contact Us is clicked', () => {
    render(<App />);
    screen.getByRole('button', { name: /Contact Us/i }).click();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });
});
