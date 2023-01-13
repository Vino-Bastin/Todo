export const toggleCompleted = (globalState, payload) => {
  globalState.todo.forEach((t) => {
    if (t.id === payload) t.isCompleted = !t.isCompleted;
  });
  return globalState;
};

export const newTodo = (globalState, payload) => {
  globalState.todo.unshift(payload);
  return globalState;
};
