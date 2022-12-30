export const Str = {
    isLowerCase(string: string) {
        return string === string.toLowerCase();
    },
    capitalize(string: string) {
        const capitalizedFirstLetter = string.charAt(0).toUpperCase();

        return capitalizedFirstLetter + string.slice(1);
    },
    isCapitalized(string: string) {
        const firstLetter = string.charAt(0);
        return (
            this.isNotEmpty(string)
            && string.startsWith(firstLetter.toUpperCase())
        );
    },
    isNotEmpty(string: string) {
        return string !== '';
    },
    trim(string: string) {
        return string.trim();
    }
};

export const Num = {
    toString(number: number) {
        // Radix not supported.
        return number.toString();
    }
};

export const Bool = {
    doesPass(boolean: boolean) {
        return boolean;
    }
};