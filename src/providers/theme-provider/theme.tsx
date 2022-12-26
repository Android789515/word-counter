import { ReactNode, createContext, useState } from 'react';

import { ThemeContext, Themes } from './themeTypes';

const themeContext = createContext<ThemeContext>({});

interface Props {
    children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState<Themes>(Themes.light);

    const toggleTheme = () => setTheme(prevTheme => {
        if (prevTheme === Themes.light) {
            return Themes.dark;
        } else {
            return Themes.light;
        }
    });

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};

export { themeContext, ThemeProvider };