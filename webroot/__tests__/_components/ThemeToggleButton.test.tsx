import { render, fireEvent } from '@testing-library/react';
import ThemeToggleButton from '../../src/_components/ThemeToggleButton/ThemeToggleButton';
import '@testing-library/jest-dom';

describe('ThemeToggleButton', () => {
  it('should call themeToggle with the correct theme mode', () => {
    const themeToggleMock = jest.fn();
    const { getByTestId } = render(
      <ThemeToggleButton themeToggle={themeToggleMock} />
    );
    const themeButton = getByTestId('theme-toggle-button');

    // Cliquer sur le bouton pour basculer le thème à "dark"
    fireEvent.click(themeButton);

    // Vérifier que la fonction themeToggle a été appelée avec le thème "dark"
    expect(themeToggleMock).toHaveBeenCalledWith('dark');

    // Cliquer à nouveau pour basculer le thème à "light"
    fireEvent.click(themeButton);

    // Vérifier que la fonction themeToggle a été appelée avec le thème "light"
    expect(themeToggleMock).toHaveBeenCalledWith('light');
  });
});
