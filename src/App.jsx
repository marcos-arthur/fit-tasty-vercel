import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import RecipeList from './components/RecipeList/RecipeList';
import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import RecipeDetails from './components/RecipeDetails';
import NutricionistsComponent from './components/NutricionistsComponent/NutricionistsComponent';
import AddRecipeComponent from './components/AddRecipeComponent/AddRecipeComponent';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'booststrap'

function App() {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado

  const handleLogin = (userData) => {
    setUser(userData); // Atualiza o estado com os dados do usuário
  };

  const handleLogout = () => {
    setUser(null); // Limpa o estado do usuário para realizar o logout
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage user={user} onLogout={handleLogout} />} // Passando onLogout como prop
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/addrecipe" element={<AddRecipeComponent/>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

function MainPage({ user, onLogout }) {
  const [recipeSearchResult, setRecipeSearchResult] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  return (
    <div>
      <Header user={user} onLogout={onLogout} /> {/* Passando onLogout */}
      <Hero />
      <SearchForm 
        setRecipeSearchResult={setRecipeSearchResult}
        setIsSearching={setIsSearching}
      />
      <RecipeList 
        recipeSearchResult={recipeSearchResult}
        isSearching={isSearching}
      />
      <NutricionistsComponent/>
      <Footer />
    </div>
  );
}

export default App;
