import React from 'react';
import styles from "./ListTasks.module.css";
import iconEmpty from "../../assets/empty.svg";

const EmptyList = () => {
    return (
        <div className={styles.containerEmptyList}>
            <img src={iconEmpty} alt={'empty list'} width={56} height={56}/>
            <div>
                <text>Você ainda não tem tarefas cadastradas</text>
                <text>Crie tarefas e organize seus itens a fazer</text>
            </div>
        </div>
    );
};

export default EmptyList;
