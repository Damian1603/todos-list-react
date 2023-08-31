import React from 'react';
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

  const hideDone = false;

  return (
    <Main>
      <h1 className="main__header">Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Main>
  );
}

export default App;
