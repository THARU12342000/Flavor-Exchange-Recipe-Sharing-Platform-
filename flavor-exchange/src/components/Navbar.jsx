import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/favorites">Favorites</Link> |{" "}
      <Link to="/create">Add Recipe</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
