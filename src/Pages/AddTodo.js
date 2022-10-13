import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoContext from "../Context/todoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = todos[todos.length - 1].id + 1;
    const newTodo = {
      id: newId,
      title: todo,
    };
    const newTodos = [...todos, newTodo];
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
      <button type="submit">add todo</button>
    </form>
  );
};

export default AddTodo;
