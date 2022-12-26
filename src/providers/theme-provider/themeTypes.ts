export enum Themes {
    dark,
    light
}

export interface ThemeContext {
    isLightTheme: () => boolean;
    isDarkTheme: () => boolean;
    toggleTheme: () => void;
}