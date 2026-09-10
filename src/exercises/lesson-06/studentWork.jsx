import { useState } from 'react';

import UserProfile from './src/components/UserProfile';
import TaskFilterButtons from './src/components/TaskFilterButtons';
import TaskItem from './src/components/TaskItem';

import { useTasks } from './src/hooks/useTasks';
import { filterTasks } from './src/utils/filterTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilterButtons filter={filter} onChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
