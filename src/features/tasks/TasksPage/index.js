import { Form } from './Form'
import { TasksList } from './TasksList/index.js';
import { Buttons } from './Buttons/index.js';
import { Section } from '../../../common/Section/index.js';
import { StyledContainer } from '../../../common/Container/styled.js'
import { Search } from './Search/index.js';
import { FetchExampleTasksButton } from './FetchExampleTasksButton';

export const TasksPage = () => {

  return (
    <StyledContainer>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </StyledContainer>
  );
};