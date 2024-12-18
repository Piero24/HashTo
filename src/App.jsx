import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './home/page';
import Book from './books/page';
import Product from './book/page';
// import NotFound from './notFound/page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <header>
        <Navbar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={
            <Home/>
          }
          />
          <Route path="/books" element={
            <Book/>
          }
          />
          <Route path="/book/:title" element={
            <Product />
          }
          />
          {/*
          <Route path="*" element={
            <NotFound />
          }
          />
          */}
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

// https://uiverse.io/abuayaan01/tall-mayfly-66
// https://uiverse.io/G4b413l/good-crab-75