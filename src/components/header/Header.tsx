import React from 'react';
import styles from './Hearder.module.css'
import logo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt={'Logotipo'}/>
        </div>
    );
};

export default Header;
