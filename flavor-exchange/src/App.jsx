import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import CreateRecipe from './pages/CreateRecipe';
import EditRecipe from './pages/EditRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/create" element={<CreateRecipe />} />
      <Route path="/edit/:id" element={<EditRecipe />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
