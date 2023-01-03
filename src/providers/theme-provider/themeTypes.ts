export enum Themes {
    dark = 'dark',
    light = 'light'
}

export interface ThemeContext {
    isLightTheme: () => boolean;
    isDarkTheme: () => boolean;
    toggleTheme: () => void;
    getThemeIcon: () => JSX.Element | null;
}