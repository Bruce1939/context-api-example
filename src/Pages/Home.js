import { useContext } from "react";
import { Link } from "react-router-dom";
import TodoContext from "./../Context/todoContext";

const Home = () => {
  const { todos, setTodos, error, loading } = useContext(TodoContext);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/${todo.id}`}>{todo.title}</Link>
          <Link to={`/update/${todo.id}`}>Update Todo</Link>
          <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
