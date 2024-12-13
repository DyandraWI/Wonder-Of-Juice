import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CardItem from './components/CardItem';
import CartItem from './components/CartItem';

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
        <nav className="navbar navbar-expand-lg sticky-top d-flex">
          <div className="container-md">
            <a className="navbar-brand fw-bold fst-italic fs-3" style={{color: "#ec8f5e"}} href="#">
              Wonder <span style={{color: "#f1eb90"}}>of</span> Juice
            </a>
            {/* Cart Icon */}
            <a
              className="iconcart btn text-light fs-3 cart-icon d-flex"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample">
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </a>
            {/* Hamburger Menu */}
            <button
              className="navbar-toggler text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-auto justify-content-center">
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#benefits">
                    Manfaat Jus
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#menu">
                    Menu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        {/* Hero Section */}
        <section id="hero" className="hero">
          <main className="content">
            <h1>
              Penuhi Asupan Nutrisi <br /> dengan Segelas <span>Jus Buah</span>
            </h1>
            <p>
              Menyegarkan tubuh dengan energi alami dari buah-buahan terbaik,{' '}
              <br /> siap menemani hari-hari Anda dengan rasa segar yang tak
              tertandingi.
            </p>
            <a href="#menu" className="cta" >
              Order Sekarang
            </a>
          </main>
        </section>

        {/* About Section */}
        <section id="benefits" className="about">
          <h2>
            Manfaat <span>Jus Buah</span>
          </h2>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
            <div className="about-img">
              <img src="/about-img.png" alt="Manfaat Jus Buah" className="img-fluid" />
            </div>
            <div className="content-about">
              <h3>
                Apa yang didapat dari meminum <span>Jus Buah</span>
              </h3>
              <p>
                Jus buah kaya akan vitamin, mineral, dan antioksidan yang penting
                untuk memperkuat sistem kekebalan tubuh, meningkatkan energi, dan
                menjaga kesehatan kulit. Selain itu, jus buah membantu detoksifikasi
                tubuh, mendukung fungsi hati, memperlancar pencernaan, dan menjaga
                hidrasi optimal. <br /> <br />
                Jus buah juga memberikan dorongan energi alami, mendukung penurunan
                berat badan, dan memperbaiki mood. Dengan kandungan vitamin C,
                kalium, dan serat, jus buah meningkatkan sistem kekebalan, menjaga
                kesehatan jantung, dan memastikan tubuh mendapatkan nutrisi penting
                setiap hari.
              </p>
            </div>
          </div>
        </section>

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

        <CartItem 
          cart={cart}
          calculateTotal={calculateTotal}
          handleCheckout={handleCheckout}
          removeFromCart={removeFromCart}
        />
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
