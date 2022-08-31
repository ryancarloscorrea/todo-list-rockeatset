import React, {FC} from 'react';
import styles from "./ListTasks.module.css";
import EmptyList from "./EmptyList";
import {Task} from "../Body/Body";
import Card from "../Card/Card";


interface ListTasksProps {
    tasks: Task[]
    onCheckTask: (a: number) => void
    onDelete: (a: number) => void
}
const ListTasks:FC<ListTasksProps> = ({tasks, onCheckTask, onDelete}) => {
    if (tasks.length === 0) {
        return <EmptyList/>
    }
    return (
        <div className={styles.containerList}>
            {tasks.map((item, index) => <Card task={item} onCheckTask={onCheckTask} onDelete={onDelete} index={index}/>)}
        </div>
    );
};

export default ListTasks;
