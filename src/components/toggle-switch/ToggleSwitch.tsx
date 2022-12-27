import { useContext, useState } from 'react';

import { themeContext } from 'providers/theme-provider';

import styles from './ToggleSwitch.module.scss';

type ToggleOnFunction = () => void;
type ToggleOffFunction = () => void;

interface Props {
    isInitiallyToggledOn?: boolean;
    icon?: JSX.Element | null;
    whenToggledOn: ToggleOnFunction;
    whenToggledOff: ToggleOffFunction;
}

export const ToggleSwitch = ({ isInitiallyToggledOn = false, icon, whenToggledOn, whenToggledOff }: Props) => {
    const { isLightTheme } = useContext(themeContext);

    const switchBackground = isLightTheme()
        ? styles.toggleSwitchLight
        : styles.toggleSwitchDark;

    const [ isToggledOn, setIsToggledOn ] = useState(isInitiallyToggledOn);

    const toggleOn = () => {
        setIsToggledOn(true);
        whenToggledOn();
    };

    const toggleOff = () => {
        setIsToggledOn(false);
        whenToggledOff();
    };

    const toggleSwitch = () => isToggledOn ? toggleOff() : toggleOn();

    const knobPosition = isToggledOn
        ? styles.toggleSwitchKnobRight
        : styles.toggleSwitchKnobLeft;

    return (
        <button
            className={`
                ${styles.toggleSwitch}
                ${switchBackground}
            `}
            onClick={toggleSwitch}
        >
            <span
                className={`
                    ${styles.toggleSwitchKnob}
                    ${knobPosition}
                `}
            >
                <div className={styles.toggleSwitchKnobIcon}>
                    {icon}
                </div>
            </span>
        </button>
    );
};