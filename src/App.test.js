import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    // Set up a mock for window.analytics
    window.analytics = {
      page: jest.fn(),
    };
  });


  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });
});