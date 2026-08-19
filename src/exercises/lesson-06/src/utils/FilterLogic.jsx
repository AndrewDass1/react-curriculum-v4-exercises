export default function FilterLogic(tasks = []) {
  // #2: Filtering logic inside component
  let visibleTasks;
  if (tasks.completed === 'completed') {
    return (visibleTasks = tasks.filter((task) => task.completed));
  }
  if (tasks.completed === 'pending') {
    return (visibleTasks = tasks.filter((task) => !task.completed));
  }
  if (tasks.completed === 'all') {
    return (visibleTasks = tasks.filter(task));
  }
}
