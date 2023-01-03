import { ReactNode, createContext, useState, useEffect } from 'react';

import useSavePreferences from 'hooks/useSavePreferences';

import { ThemeContext, Themes } from './themeTypes';
import { ThemeIcon } from 'components/theme-icon';

const themeContext = createContext<ThemeContext>({
    isLightTheme: () => true,
    isDarkTheme: () => false,
    toggleTheme: () => {},
    getThemeIcon: () => null
});

interface Props {
    children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    const themeKey = 'wordCounter/theme';
    const { save: saveTheme, load: loadTheme } = useSavePreferences<Themes>(themeKey);

    const [ theme, setTheme ] = useState<Themes>(loadTheme() || Themes.light);

    useEffect(() => {
        saveTheme(theme);
    }, [theme, saveTheme]);

    const isLightTheme = () => theme === Themes.light;
    const isDarkTheme = () => theme === Themes.dark;

    const toggleTheme = () => setTheme(prevTheme => {
        if (prevTheme === Themes.light) {
            return Themes.dark;
        } else {
            return Themes.light;
        }
    });

    const getThemeIcon = () => (
        <ThemeIcon
            isDarkTheme={isDarkTheme()}
        />
    );

    return (
        <themeContext.Provider value={{
            isLightTheme,
            isDarkTheme,
            toggleTheme,
            getThemeIcon
        }}>
            {children}
        </themeContext.Provider>
    );
};

export { themeContext, ThemeProvider };