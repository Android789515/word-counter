export const String = {
    capitalize(string: string) {
        const capitalizedFirstLetter = string[0].toUpperCase();

        return capitalizedFirstLetter + string.slice(1);
    },
    isNotEmpty(string: string) {
        return string !== '';
    }
}

export const Number = {
    toString(number: number) {
        // Radix not supported.
        return number.toString();
    }
}