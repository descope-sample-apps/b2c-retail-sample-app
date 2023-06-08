import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSession } from '@descope/react-sdk';
import Banner from './Banner';


jest.mock('@descope/react-sdk', () => ({
    useSession: jest.fn(),
}));

describe('Banner', () => {
    it('renders the banner heading', () => {
        useSession.mockReturnValue({ isAuthenticated: false });
        render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(screen.getByText('Funny Tees, Laughably Low Prices')).toBeInTheDocument();
    });

    it('shows the Login button when not authenticated', () => {
        useSession.mockReturnValue({ isAuthenticated: false });
        render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    it('does not show the Login button when authenticated', () => {
        useSession.mockReturnValue({ isAuthenticated: true });
        render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(screen.queryByText('Login')).toBeNull();
    });
});