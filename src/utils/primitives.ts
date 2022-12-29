export const Str = {
    capitalize(string: string) {
        const capitalizedFirstLetter = string.charAt(0).toUpperCase();

        return capitalizedFirstLetter + string.slice(1);
    },
    isNotEmpty(string: string) {
        return string !== '';
    }
}

export const Num = {
    toString(number: number) {
        // Radix not supported.
        return number.toString();
    }
}