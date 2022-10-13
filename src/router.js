import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";
import UpdateTodo from "./Pages/UpdateTodo";
import Todo from "./Pages/Todo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/:id" element={<Todo />} />
      <Route path="/update/:id" element={<UpdateTodo />} />
    </Routes>
  );
};

export default Router;
