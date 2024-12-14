import React from 'react';
import '../App.jsx';

function About ({}) {
    return ( 
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
    )
}

export default About