import React, { useState } from 'react';
import Appbar from './components/Appbar'
import Grid from './components/Grid'
import CartSidebar from './components/CartSidebar'
var _ = require('lodash')

function App() {
  const [cart, setCart] = useState([
    "CHILL", "CHILL"
  ])
  console.log(`app rendered with ${cart}`)

  const handleCart = (shoe, value) => {
    if (value > 0) {
      const newCart = _.concat(cart, [shoe.name])
      cart.map(c=>2)
      console.log(newCart)
      setCart(newCart)
    } else {
      const idx = cart.indexOf(shoe.name)
      const newCart = _.concat(cart.slice(0, idx),cart.slice(idx + 1, cart.length))
      console.log(newCart)
      setCart(newCart)
    }
  }

  return (
    <div>
      <Appbar />
      <CartSidebar cart={cart} handleCart={handleCart} />
      <Grid cart= {cart} handleCart={handleCart}/>
    </div>
  );
}


export default App;
