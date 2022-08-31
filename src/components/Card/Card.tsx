import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from "./Card.module.css";
import iconCheck from "../../assets/check.svg";
import iconTrash from "../../assets/trash.svg";
import {Task} from "../Body/Body";

interface CardProps {
    onCheckTask: (a: number) => void
    task: Task
    onDelete: (a: number) => void
    index: number
}

const Card:FC<CardProps> = ({task, onCheckTask ,onDelete, index}) => {
    return (
        <div className={styles.card}>
            <div className={task.isDone ?
                styles.radioButtonSelected :
                styles.radioButtonUnselected}
                 onClick={() => onCheckTask(index)}>
                {task.isDone && <img src={iconCheck} alt={'iconCheck'}/>}
            </div>
            <text className={ task.isDone ? styles.textDescriptionTaskCompleted : styles.textDescriptionTask}
            >{task.description}
            </text>
            <div style={{marginLeft: 16}} onClick={() => onDelete(index)}>
                <img src={iconTrash} alt={'trash'}/>
            </div>
        </div>
    );
};

export default Card;
