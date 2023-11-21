import { useState } from 'react';
import { Form } from './Form';
import { Tasks } from './Tasks';
import { Buttons } from './Buttons';
import { Section } from './Section';
import { Main } from './Main';
import { useTasks } from './hooks/useTasks';

function App() {

  const {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask} = useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <Main>
      <h1 className="main__header">Lista zadań</h1>
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
}

export default App;
