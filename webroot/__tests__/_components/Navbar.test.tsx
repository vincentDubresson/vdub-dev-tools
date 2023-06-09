import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../../src/_components/Navbar/Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders the logo and home link', () => {
    const { getByAltText, getByTestId } = render(
      <Navbar handleThemeToggle={() => {}} />
    );
    const logoImage = getByAltText('logo');
    const homeLink = getByTestId('HomeRoundedIcon');

    expect(logoImage).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  it('should handle theme toggle click', () => {
    const handleThemeToggle = jest.fn();
    const { getByTestId } = render(
      <Navbar handleThemeToggle={handleThemeToggle} />
    );
    const themeToggleButton = getByTestId('theme-toggle-button');

    fireEvent.click(themeToggleButton);

    expect(handleThemeToggle).toHaveBeenCalledTimes(1);
    expect(handleThemeToggle).toHaveBeenCalledWith('dark');
  });
});
