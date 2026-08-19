import { useEffect, useState } from 'react';

import FilterLogic from './src/utils/FilterLogic.jsx';

import DataFetch from './src/hooks/dataFetching.jsx';

export default function StudentWork() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together
  function DataFetch() {
    return useEffect(() => {
      const timeout = setTimeout(() => {
        setTasks([
          { id: 1, title: 'Learn React', completed: true },
          { id: 2, title: 'Refactor code', completed: false },
          { id: 3, title: 'Organize files', completed: false },
        ]);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timeout);
    }, []);
  }

  function LoadingState() {
    if (loading) {
      return <p>Loading tasks...</p>;
    }
  }

  // function FilterLogic() {
  // // #2: Filtering logic inside component
  //   let visibleTasks = tasks;
  //   if (filter === 'completed') {
  //     visibleTasks = tasks.filter((task) => task.completed);
  //   }
  //   if (filter === 'pending') {
  //     visibleTasks = tasks.filter((task) => !task.completed);
  //   }

  // if (loading) {
  //   return <p>Loading tasks...</p>;
  // }

  // how to get visibleTasks to show up here

  // 5: Inline list render
  function InlineRender() {
    let visibleTasks = tasks;
    return (
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    );
  }

  // }

  // 4: Buttons
  function Buttons() {
    return (
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <p>Current filter: {filter}</p>
      </div>
    );
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      <LoadingState />

      {/* 1 */}
      <DataFetch />

      <FilterLogic />

      <InlineRender />

      {/* #4: Repeated button JSX */}
      <Buttons />
    </div>
  );
  return tasks;
}
