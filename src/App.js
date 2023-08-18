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

const hideCompleted = false;

function App() {
  return (
    <Main>
      <h1 className="main__header">Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideCompleted={hideCompleted} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideCompleted={hideCompleted} />
        }
      />
    </Main>
  );
}

export default App;
