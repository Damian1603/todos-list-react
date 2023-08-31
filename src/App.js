import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Main from './Main';

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];


function App() {

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: true },
    { id: 2, content: "zjeść obiad", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task =>
    ({
      ...task,
      done: true
    })));
  }

  return (
    <Main>
      <h1 className="main__header">Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
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
}

export default App;
