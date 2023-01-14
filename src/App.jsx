import CompletedTodos from "./Components/CompletedTodos";
import Header from "./Components/Header";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";
import Route from "./Route/Route";
import { configureState } from "./Store/Store";
import { newTodo, toggleCompleted } from "./Store/todo.actions";

configureState(
  {
    todo: [
      {
        id: 1,
        title: "Test",
        idCompleted: false,
        content: "First todo",
      },
      {
        id: 2,
        title: "Test",
        isCompleted: false,
        content: "second todo",
      },
    ],
  },
  {
    TOGGLE_COMPLETED: toggleCompleted,
    NEW_TODO: newTodo,
  }
);

function App() {
  return (
    <div>
      <Header />
      <section className="content ml-40 mr-40">
        <Route path={"/"} component={<TodoList />} />
        <Route path={"/todo"} component={<TodoList />} />
        <Route path={"/new"} component={<NewTodo />} />
        <Route path={"/done"} component={<CompletedTodos />} />
      </section>
    </div>
  );
}

export default App;
