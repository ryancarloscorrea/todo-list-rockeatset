import React, {FC} from 'react';
import styles from "../Body/Body.module.css";

interface BadgeProps {
    value?: string
}
const Badge:FC<BadgeProps> = ({value}) => {
    return (
        <div className={styles.badge}>
            <text>{value}</text>
        </div>
    );
};

export default Badge;
