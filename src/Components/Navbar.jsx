import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="container">
        <h1>Todo</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-todo">Add Todo</Link>
        </nav>
    </header>
  )
}

export default Navbar