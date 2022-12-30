import styles from './CheckMessageButton.module.scss';

interface Props {
    onClick(): void;
}

export const CheckMessageButton = ({ onClick }: Props) => {
    return (
        <button
            className={styles.checkMessageButton}
            onClick={onClick}
        >
            Git-Check
        </button>
    );
};