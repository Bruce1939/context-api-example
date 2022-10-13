import { useContext } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "./../Context/todoContext";

const Todo = () => {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const selectedTodo = todos.find((todo) => todo.id === Number(id) && todo);

  return (
    <div>
      <h1>{selectedTodo.title}</h1>
    </div>
  );
};

export default Todo;
