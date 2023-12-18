import { useState } from 'react'
import { Form } from './Form';
import { Tasks } from './Tasks';
import { Buttons } from './Buttons';
import { Section } from './Section';
import { StyledContainer } from './Container/styled.js'
import { useTasks } from './useTasks';;

export function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  return (

    <StyledContainer>
      <h1>Lista zadań</h1>
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

    </StyledContainer>
  );
};