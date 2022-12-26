export enum Themes {
    dark,
    light
}

interface _ThemeProvider {
    theme: Themes;
    toggleTheme: () => void;
}

export type ThemeContext = _ThemeProvider | {};