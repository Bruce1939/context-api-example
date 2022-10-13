import { useState, useEffect, createContext } from "react";
import { getTodo } from "../service/getTodo";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      const [responseTodos, error] = await getTodo();
      setLoading(false);
      if (error) return setError("something went wrong");
      setTodos(responseTodos);
    };
    fetchTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, error, loading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
