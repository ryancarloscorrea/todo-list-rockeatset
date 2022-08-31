import React, {useEffect, useState} from 'react';
import styles from './Body.module.css'
import iconPlust from '../../assets/plus.svg'
import iconEmpty from '../../assets/empty.svg'
import Badge from "../Badge/Badge";
import Card from "../Card/Card";
import ListTasks from "../ListTasks/ListTasks";

export type Task = {
    description: string
    isDone: boolean
}

const Body = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [textInput,setTextInput] = useState<string>('')

    const deleteTask = (index: number) => {
        const auxTasks = [...tasks]
        auxTasks.splice(index, 1)
        setTasks(auxTasks)
    }

    const checkTask = (index: number) => {
        const auxTasks = [...tasks]
        auxTasks[index].isDone = !auxTasks[index].isDone
        setTasks(auxTasks)
    }

    const getQuantityTasksDone = () => {
        return tasks.filter(task => task.isDone).length
    }

    const getLabelBadgeDone = () => tasks.length === 0 ? '0' : `${getQuantityTasksDone()} de ${tasks.length}`

    return (
        <div className={styles.body}>
            <div className={styles.containerInputButton}>
                <input className={styles.input} placeholder={'Adicione uma nova tarefa'} value={textInput}
                       onChange={(event) => setTextInput(event.currentTarget.value)}/>
                <button className={styles.button} onClick={() => {
                    if(textInput?.length > 0) {
                        setTasks([...tasks, {description: textInput,isDone: false}])
                        setTextInput('')
                    }
                }}>
                    <text className={styles.textButton}> Criar</text>
                    <img src={iconPlust} alt={'plus'}/>

                </button>
            </div>
            <div className={styles.containerList}>
                <div className={styles.containerHeaderList}>
                    <div className={styles.containerTitleBadge}>
                        <text className={styles.textTaskCreated}>Tarefas criadas</text>
                        <Badge value={tasks.length.toString()}/>
                    </div>
                    <div className={styles.containerTitleBadge}>
                        <text className={styles.textCompleted}>Concluídas</text>
                        <Badge value={getLabelBadgeDone()}/>
                    </div>
                </div>
                <ListTasks tasks={tasks} onCheckTask={checkTask} onDelete={deleteTask}/>
            </div>
        </div>
    );
};

export default Body;
