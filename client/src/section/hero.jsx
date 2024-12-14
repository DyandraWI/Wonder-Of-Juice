import React from 'react';
import '../App.jsx';

function Hero ({}) {
    return(
        <>
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
        </>
    )
}

export default Hero