import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './home/page';
import Resources from './resources/page';
import Product from './book/page';
// import NotFound from './notFound/page';

/**
 * Main application component that renders the routing structure for different pages
 * along with the Navbar and Footer.
 */
function App() {
  // Local state for counting (though it's not used in the current example)
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        {/* Navbar component */}
        <Navbar />
      </header>

      <main>
        {/* Defining the Routes for different pages */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Resources listing route */}
          <Route path="/Resources" element={<Resources />} />

          {/* Dynamic route for individual book details */}
          <Route path="/book/:title" element={<Product />} />

          {/* Uncomment this for NotFound route */}
          {/*
          <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </main>

      <footer>
        {/* Footer component */}
        <Footer />
      </footer>
    </>
  );
}

export default App;