import React, { useState } from 'react';
import Appbar from './components/Appbar'
import Grid from './components/Grid'
import CartSidebar from './components/CartSidebar'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './styles/notify.css'
var _ = require('lodash')

const Msg = ({ closeToast, shoe, qty }) => (
  <div className="notify-container">
    <img src={shoe.jpeg_img_main} alt="smoll" />
    <span>x{qty}</span>
  </div>
)

function App() {
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([
    "CHILL", "CHILL"
  ])

  const [gender, setGender] = useState('a') // m = male, f = female, a = all
  const notifyCart = (shoe, qty) => {
    toast(<Msg shoe={shoe} qty={qty} />, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  const handleCart = (shoe, value) => {
    if (value > 0) {
      let tmp = []
      for (let i = 0; i < value; i++) {
        tmp = _.concat(tmp, [shoe.name])
      }
      let newCart = _.concat(cart, tmp)
      setCart(newCart)
    } else {
      const idx = cart.indexOf(shoe.name)
      const newCart = _.concat(cart.slice(0, idx), cart.slice(idx + 1, cart.length))
      setCart(newCart)
    }
  }


  const handleShowCart = () => {
    setShowCart(!showCart)
    console.log("show cart filled")
  }
  
  const handleGender = (btn) => {
    if (btn === gender && btn !== 'a') {
      // act like a toggle
      setGender('a')
    } else {
      setGender(btn)
    }

  }
  return (
    <div>
      <Appbar showCart={showCart} handleShowCart={handleShowCart} handleGender={handleGender} gender={gender} />
      <ToastContainer />
      <CartSidebar handleShowCart={handleShowCart} showCart={showCart} cart={cart} handleCart={handleCart} />
      <Grid gender={gender} notify={notifyCart} cart={cart} handleCart={handleCart} />
    </div>
  );
}


export default App;
