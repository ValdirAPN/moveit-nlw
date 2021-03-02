import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ValdirAPN.png" alt="Valdir Aires - Avatar"/>
            <div>
                <strong>Valdir Aires</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Up Arrow"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}