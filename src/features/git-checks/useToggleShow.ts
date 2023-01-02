import { useState } from 'react';

const useToggleShow = (startShown: boolean) => {
    const [ isShown, setIsShown ] = useState(startShown);

    const toggleShown = () => setIsShown(wasShown => !wasShown);

    return {
        isShown,
        toggleShown
    };
};

export default useToggleShow;