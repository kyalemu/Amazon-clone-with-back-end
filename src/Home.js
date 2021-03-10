import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/3706_WatchToGiveBack_TallDesktopHero_1x_1500x600._CB660206622_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="ASUS Laptop L210 Ultra Thin Laptop, 11.6"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="iBUYPOWER Gaming PC Computer Desktop Trace 4 9310 
            (AMD Ryzen 5 3600 3.6GHz, AMD Radeon RX 5500 XT 4GB, 8GB DDR4 RAM"
            price={699.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71CyfrhCZ1L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Govee Smart LED Strip Lights, 16.4ft WiFi LED Lights Work with Alexa and Google Assistant, Bright 5050 LEDs, 
            16 Million Colors with App Control and Music Sync for Home, Kitchen, TV, Party"
            price={18.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71FN5PwrLLL._AC_SX425_.jpg"
          />

          <Product
            id="99903850"
            title="Home Collection 3 Piece Full/Queen Over Size Embossed Solid White Color Coverlet Bedspread New # Veronica"
            price={68}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81IaUxJsrdL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over
            Ear Headphones with Mic &amp; LED Light, Compatible with PS5, PS4, Xbox One, Switch, PC, PS2, Mac, Laptop"
            price={24.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX466_.jpg"
          />
          <Product
            id="8903851"
            title="80ft LED Strip Lights, Music Sync Color Changing LED Light Built-in Mic, 
            Bluetooth APP Controlled DIY Color Options Rope Lights, 5050 RGB LED Light Strip(APP+Remote+Mic+Music)"
            price={44.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71r8REEcJvL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer, 6 Quart, 14 One-Touch Programs"
            price={79.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61XkZDJ6ilL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
