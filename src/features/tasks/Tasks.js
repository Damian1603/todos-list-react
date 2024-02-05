import { Form } from './Form/index.js';
import { TaskList } from './TaskList/index.js';
import { Buttons } from './Buttons/index.js';
import { Section } from '../../common/Section/index.js';
import { StyledContainer } from '../../common/Container/styled.js'

export function Tasks() {

  return (
    <StyledContainer>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </StyledContainer>
  );
};