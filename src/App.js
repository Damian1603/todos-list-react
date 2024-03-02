import { useState, useEffect, useRef } from 'react'
import { Form } from './Form';
import { Tasks } from './Tasks';
import { Buttons } from './Buttons';
import { Section } from './Section';
import { Main } from './Main';

const getTasks = () => {
  const tasksLocalStorage = localStorage.getItem("tasks");
  return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];
}
export function App() {

  const [counter, setCounter] = useState(0);
  const intervalId = useRef(null)
  const [tasks, setTasks] = useState(getTasks);
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
     intervalId.current = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
    return () => {
      clearInterval(intervalId.current)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) => tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task =>
    ({
      ...task,
      done: true
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (

    <Main>
      <h1 className="main__header">Lista zadań</h1>
      {counter}
      <button onClick={()=>clearInterval(intervalId.current)}>Stop</button>

      <Section

        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />

      <Section
        title="Lista zadań"
        body={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
            toggleHideDone={toggleHideDone}
            tasks={tasks}
            hideDone={hideDone}
          />
        }
      />
    </Main>
  );
};