import { ReactNode, createContext, useState } from 'react';

import { ThemeContext, Themes } from './themeTypes';

const themeContext = createContext<ThemeContext>({
    isLightTheme: () => true,
    isDarkTheme: () => false,
    toggleTheme: () => {}
});

interface Props {
    children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState<Themes>(Themes.light);

    const isLightTheme = () => theme === Themes.light;
    const isDarkTheme = () => theme === Themes.dark;

    const toggleTheme = () => setTheme(prevTheme => {
        if (prevTheme === Themes.light) {
            return Themes.dark;
        } else {
            return Themes.light;
        }
    });

    return (
        <themeContext.Provider value={{ isLightTheme, isDarkTheme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};

export { themeContext, ThemeProvider };