import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoContext from "../Context/todoContext";

const UpdateTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { todos, setTodos } = useContext(TodoContext);
  const selectedTodo = todos.find((todo) => todo.id === Number(id) && todo);
  const [todo, setTodo] = useState(selectedTodo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Number(id),
      title: todo,
    };
    const newTodos = todos.map((todo) =>
      todo.id !== Number(id) ? todo : newTodo
    );
    setTodos(newTodos);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Update todo</button>
    </form>
  );
};

export default UpdateTodo;
