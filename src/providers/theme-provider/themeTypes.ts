export enum Themes {
    dark,
    light
}

export interface ThemeContext {
    isLightTheme: () => boolean;
    toggleTheme: () => void;
}