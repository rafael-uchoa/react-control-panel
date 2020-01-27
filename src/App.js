import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import Admin from './pages/Admin.js';
import Client from './pages/Client.js';

export default props => {
  const [product, setProducts] = useState([]);

  const [input, setInput] = useState({ newName: '', newPrice: '' });

  function handleDelete(itemid) {
    setProducts(productArray =>
      productArray.filter(product => product.id !== itemid)
    );
  }

  function handleInputNewProductName(e) {
    setInput({ newName: e.target.value, newPrice: input.newPrice });
  }

  function handleInputNewProductPrice(e) {
    setInput({ newName: input.newName, newPrice: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProducts([
      ...product,
      { name: input.newName, price: input.newPrice, id: product.length + 1 }
    ]);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route
          path="/admin"
          render={() => (
            <Admin
              handleSubmit={handleSubmit}
              handleInputNewProductName={handleInputNewProductName}
              handleInputNewProductPrice={handleInputNewProductPrice}
              handleDelete={handleDelete}
              product={product}
            />
          )}
        />
        <Route path="/client" render={() => <Client product={product} />} />
      </Switch>
    </BrowserRouter>
  );
};
