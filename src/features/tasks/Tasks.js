import { useState } from 'react'
import { Form } from './Form/index.js';
import { TaskList } from './TaskList/index.js';
import { Buttons } from './Buttons/index.js';
import { Section } from '../../common/Section/index.js';
import { StyledContainer } from '../../common/Container/styled.js'
import { useTasks } from '../../useTasks.js';;

export function Tasks() {

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
        body={<TaskList
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