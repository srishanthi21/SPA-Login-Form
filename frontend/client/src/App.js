import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import SellerList from './components/SellerList';
import Login from './components/Login';

function App() {
  const [sellers, setSellers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`http://localhost:8080/api/sellers`, {
          params: { name: searchQuery },
        })
        .then((response) => {
          setSellers(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the sellers!', error);
        });
    }
  }, [searchQuery, isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        {isLoggedIn ? (
          <>
            <SearchBox onSearch={setSearchQuery} />
            <SellerList sellers={sellers} />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;