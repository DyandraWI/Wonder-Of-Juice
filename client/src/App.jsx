import { useState, useEffect } from 'react';
import './App.css';
import CardItem from './components/CardItem';
import CartItem from './components/CartItem';
import Navbar from './section/navbar';
import Hero from './section/hero';
import About from './section/about';


// Total Harga Item
function App() {
  function calculateTotal() {
    return cart.reduce((total, item) => total + item.harga, 0);
  }

  // Proses checkout
  function handleCheckout() {
    if (cart.length === 0) {
      setShowCheckoutModal(false);
      return;
    }
    setCart([]); 
    setShowCheckoutModal(true); 
  }

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Hapus Barang Item
  function removeFromCart(index) {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  }
  
  // ? Mengangmbil data
  const [dataJus, setDataJus] = useState([]);

  
  const handleHamburgerClick = () => {
    setActive(!active);
  };
  
  async function getData() {
    const url = "https://brindle-plump-archaeopteryx.glitch.me/menu-jus";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      console.log(json);
      
      setDataJus(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    // isinya
    getData();
  }, []);
  
  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(menu_jus) {
    setCart([...cart, menu_jus]);
  }

  return (
    <>
        {/* Navbar */}
        <Navbar 
        handleHamburgerClick ={handleHamburgerClick}
        handleCheckout ={handleCheckout}
        cart={cart}
        />


        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Menu Section */}
        <section id="menu" className="menu-section">
        <h2 className="text-center text-light">
          <span>Menu</span> Kami
        </h2>
        <p className="text-center">
          Rasakanlah dan Nikmatilah Berbagai macam Jus Buah yang tersedia di Wonder Of Juice!
        </p>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {dataJus.map((menu_jus, index) => {
              return <CardItem menu_jus={menu_jus}key={index} addToCart={addToCart} />;
            })}
          </div>
        </div>
      </section>

       {/* Drawer */}
       <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
     <div className="offcanvas-body d-flex flex-column gap-2">
      {cart.map((element, index) => {
        return (
          <CartItem cart={element} key={index} removeFromCart={removeFromCart}  addToCart={addToCart}/>
        );
      })}

      {/* Total Harga ddn CheckOut */}
      <div className="mt-4">
        <h5>Total Harga:</h5>
        <p className="fw-bold">Rp {calculateTotal().toLocaleString()}</p>
      </div>
      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-success" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

        </div>
      </div>

      {/* Modal CheckOut */}
      {showCheckoutModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-hidden={!showCheckoutModal}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout Berhasil</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCheckoutModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Terima kasih telah memesan! Pesanan Anda sedang diproses.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCheckoutModal(false)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Footer */}
    <footer className="footer">
      <div className="container-footer">
          <div className="footer-content">
              <div className="footer-logo">
                  <h2><span>Wonder</span>of<span>Juice</span></h2>
                  <h3>"Freshness You Can Taste, Health You Can Feel.".</h3>
              </div>
              <div className="footer-links">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#benefits">Manfaat Jus</a></li>
                      <li><a href="#menu">Menu</a></li>
                  </ul>
              </div>
              <div className="footer-contact">
                  <h3>Contact Us</h3>
                  <p>Phone: (62) 821-3456-1960</p>
                  <p>Email: dyandra.wahyu@gmail.com</p>
              </div>
          </div>
          <div className="footer-bottom">
              <p>&copy; 2024 Your Brand. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
        </>
      );
}

export default App;
