import React from 'react';
import Header from "../components/header/Header";
import Body from "../components/Body/Body";
import styles from './TodoList.module.css'

const TodoList = () => {
    return (
        <div className={styles.bodyApp}>
            <Header/>
            <Body/>
        </div>
    );
};

export default TodoList;
