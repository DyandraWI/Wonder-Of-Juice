import App from "../App";
import React from 'react';

function CardItem({menu_jus, addToCart}) {
    return(
      <>
        <div className="col p-2">
          <div className="card">
          <img src={menu_jus.imageUrl} className="card-img-top" alt="image-juice"  style={{ height: "200px", objectFit: "cover", padding: "10px" }}/>
            <div className="card-body">
              <h5 className="card-title">{menu_jus.nama_jus}</h5>
              <p className="card-text">
                Rp. {menu_jus.harga}
              </p>
              <a href="#" className="btn text-white fw-semibold " data-bs-toggle="modal" data-bs-target={'#modal' + menu_jus.id}  style={{ backgroundColor: 'rgb(159, 187, 115)' }}>
                Lihat Detail
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className="modal fade" id={'modal' + menu_jus.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{menu_jus.nama_jus}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <img src={menu_jus.imageUrl} className="card-img-top" style={{ height: "300px", objectFit: "cover", padding: "10px" }} alt="image-juice" />
              <br />
              <br />
                <p>
                <span className="badge text-bg-warning fs-6 text-wrap" >Rp. {menu_jus.harga}</span>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button  onClick={() => {addToCart(menu_jus);}} type="button" className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CardItem;