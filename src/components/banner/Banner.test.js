/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSession } from '@descope/react-sdk';
import Banner from './Banner';


jest.mock('@descope/react-sdk', () => ({
    useSession: jest.fn(),
}));

describe('Banner', () => {
    it('renders the banner heading', () => {
        useSession.mockReturnValue({ isAuthenticated: false });
        const { getByText } = render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(getByText('Funny Tees, Laughably Low Prices')).toBeInTheDocument();
    });

    it('shows Login button when not authenticated', () => {
        useSession.mockReturnValue({ isAuthenticated: false });
        const { getByText } = render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(getByText('Login')).toBeInTheDocument();
    });

    it('does not show Login button when authenticated', () => {
        useSession.mockReturnValue({ isAuthenticated: true });
        const { queryByText } = render(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        );
        expect(queryByText('Login')).toBeNull();
    });
});